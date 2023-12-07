import React, {useState} from "react";

import {useFormik} from "formik";

import {LoadReportBlock} from "../LoadReportBlock/LoadReportBlock";

import {validateReport} from "./loadReportValidation";

import {ButtonsBlockStyled} from "./LoadreportForm.styled";

type FormValues = {
    reportFile?: File;
}

type LoadReportFormProps = {
    id: string;
    openModal: () => void;
}
const LoadReportForm =({id, openModal}:LoadReportFormProps) => {

    const [fileName, setFileName] = useState<string | null>(null)
    const initialValues: FormValues = {};
    const validate = validateReport;

    const formik = useFormik({
        initialValues: initialValues,
        validate,
        onSubmit: (values,{resetForm}) => {
            console.log(values.reportFile);
            openModal();
            resetForm({ values: {} });
            setFileName(null);
        },
    });

    const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.currentTarget.files) {
            const loadFile = e.currentTarget.files[0];
            formik.setFieldValue("reportFile", loadFile, true)
                .then(() => {
                    setFileName(loadFile.name)
                });
        }
    }

    const onResetForm = () => {
        formik.resetForm({ values: {} });
        setFileName(null);
    }

    return (
        <form  onSubmit={formik.handleSubmit} id={`${id}form`}> {/*onSubmit={formik.handleSubmit}*/}

            <LoadReportBlock
                fileName={fileName}
                onChange={onChangeInput}
                errorMes={formik.errors.reportFile}
                id={id}
            />

            <ButtonsBlockStyled onReset={onResetForm}/>

        </form>
    )
}

export {LoadReportForm}