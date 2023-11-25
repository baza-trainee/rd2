import React, { useState } from "react";

import { Form, Formik } from "formik";

import { Button, Box } from "@mui/material";

import AddCircleIcon from "@mui/icons-material/AddCircle";

import { PageContentWrapper } from "../PageContentWrapper/PageContentWrapper";

import { loadLogosSchema } from "./loadLogosValidationSchema";

import {
  ErrorMessageStyled,
  InputStyled,
  LabelStyled,
  LoadFieldWrapper,
} from "./AdminPartnersLogo.styled";

interface FormValues {
  logoImg?: File;
}

const AdminPartnersLogo = () => {
  const [fieldText, setFieldText] = useState("Додати лого");

  const initialValues: FormValues = {};

  return (
    <PageContentWrapper>
      <Formik
        initialValues={initialValues}
        validationSchema={loadLogosSchema}
        onSubmit={(values, actions) => {
          console.log(values);
          actions.resetForm({ values: {} });
          setFieldText("Додати лого");
        }}
      >
        {({ errors, touched, setFieldValue }) => (
          <Form>
            <LoadFieldWrapper>
              <LabelStyled
                htmlFor="logoImg"
                className={touched.logoImg && errors.logoImg ? "error" : ""}
              >
                <AddCircleIcon color="primary" />
                <span>{fieldText}</span>
              </LabelStyled>

              <InputStyled
                type="file"
                accept=".jpg, .png, .webp, .svg"
                id="logoImg"
                name="logoImg"
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                  if (e.currentTarget.files) {
                    const loadImg = e.currentTarget.files[0];
                    setFieldValue("logoImg", loadImg, true).then(() =>
                      setFieldText(loadImg.name),
                    );
                  }
                }}
              />

              <ErrorMessageStyled name="logoImg" component="p" />
            </LoadFieldWrapper>

            <Box display="flex" justifyContent="center" m={"auto"}>
              <Button variant="contained" type="submit">
                Додати
              </Button>
            </Box>
          </Form>
        )}
      </Formik>
    </PageContentWrapper>
  );
};

export { AdminPartnersLogo };
