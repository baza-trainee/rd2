/* eslint-disable max-len */
import { ChangeEvent, useState } from "react";

import { useFormik } from "formik";
import { useMutation } from "react-query";
import { AxiosResponse } from "axios";

import { loadData } from "api/requests/loadData";
import { Fallback } from "components/commonComponents/Fallback/Fallback";
import { LoadReportBlock } from "components/Admin/AdminReports/LoadReportBlock/LoadReportBlock";
import { validateReport } from "components/Admin/AdminReports/LoadReportForm/loadReportValidation";
import { ButtonsBlockStyled } from "components/Admin/AdminReports/LoadReportForm/LoadreportForm.styled";

type FormValues = {
  reportFile?: File;
};

type LoadReportFormProps = {
  id: string;
  loadFunc: (data: File) => () => Promise<AxiosResponse<any, any>>;
  openModalSuccess: () => void;
  openModalError: (errorText: string) => void;
};

export const LoadReportForm = ({
  id,
  openModalSuccess,
  openModalError,
  loadFunc,
}: LoadReportFormProps) => {
  const mutation = useMutation((reportFile: File) => loadData(loadFunc(reportFile))(), {
    onError: (error: Error) => {
      openModalError(`Повідомлення не відправлено. ${error.message}`);
    },
    onSuccess: () => {
      openModalSuccess();
      formik.resetForm({ values: {} });
      setFileName(null);
    },
  });

  const [fileName, setFileName] = useState<string | null>(null);
  const initialValues: FormValues = {};
  const validate = validateReport;

  const formik = useFormik({
    initialValues: initialValues,
    validate,
    onSubmit: (values) => {
      values.reportFile && mutation.mutate(values.reportFile);
    },
  });

  const onChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.currentTarget.files) {
      const loadFile = e.currentTarget.files[0];
      formik.setFieldValue("reportFile", loadFile, true).then(() => {
        setFileName(loadFile.name);
      });
    }
  };

  const onResetForm = () => {
    formik.resetForm({ values: {} });
    setFileName(null);
  };

  return (
    <>
      <form onSubmit={formik.handleSubmit} id={`${id}form`}>
        {" "}
        <LoadReportBlock
          fileName={fileName}
          onChange={onChangeInput}
          errorMes={formik.errors.reportFile}
          id={id}
        />
        <ButtonsBlockStyled onReset={onResetForm} />
      </form>

      {mutation.isLoading && <Fallback blockType={true} />}
    </>
  );
};
