import React, { useState } from "react";

import { useFormik } from "formik";

import { useMutation } from "react-query";

import { AxiosResponse } from "axios";

import { LoadReportBlock } from "../LoadReportBlock/LoadReportBlock";

import { loadData } from "../../../../api/loadData";

import { Fallback } from "../../../commonComponents/Fallback/Fallback";

import { validateReport } from "./loadReportValidation";

import { ButtonsBlockStyled } from "./LoadreportForm.styled";

type FormValues = {
  reportFile?: File;
};

type LoadReportFormProps = {
  id: string;
  loadFunc: (data: File) => () => Promise<AxiosResponse<any, any>>;
  openModalSuccess: () => void;
  openModalError: (errorText: string) => void;
};
const LoadReportForm = ({
  id,
  openModalSuccess,
  openModalError,
  loadFunc,
}: LoadReportFormProps) => {
  const mutation = useMutation((reportFile: File) => loadData(loadFunc(reportFile))(), {
    onError: (error: Error) => {
      openModalError(`Повідомлення не відправлено. ${error.message}`);
      //openModalError(`${error instanceof Error && error.message}`);
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
      console.log(values.reportFile);
      values.reportFile && mutation.mutate(values.reportFile);
    },
  });

  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
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
        {/*onSubmit={formik.handleSubmit}*/}
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

export { LoadReportForm };
