import React from "react";

import { useFormik } from "formik";

import {useMutation} from "react-query";

import { Button } from "@mui/material";

import { contactValuesType } from "types/typeFeedbackUserDetails";

import { useTranslation } from "react-i18next";

import {sendFeedback} from "../../../../api/feedBackUsers";

import {loadData} from "../../../../api/loadData";

import { contactSchema } from "./updateValidationTranslation";

import {
  FormEl,
  FieldContainer,
  FieldLabel,
  Input,
  Textarea,
  FormError,
} from "./Form.styled";

interface ContactFormProps {
  openModalSuccess: () => void;
  openModalError: (errorText: string) => void;
}

const initialValues: contactValuesType = {
  name: "",
  surname: "",
  phone: "",
  email: "",
  message: "",
};

const ContactForm: React.FC<ContactFormProps> = ({ openModalSuccess, openModalError }) => {
  const { t } = useTranslation();

    const mutation = useMutation(
        (user: contactValuesType) => loadData(sendFeedback(user))(), {
            onError: (error: Error) => {
                openModalError(`Повідомлення не відправлено. ${error.message}`);
                //openModalError(`${error instanceof Error && error.message}`);
            },
            onSuccess: () => {
                openModalSuccess();
                resetForm();
            },
        },
    )

  const { values, errors, touched, handleBlur, handleChange, handleSubmit, resetForm } =
    useFormik({
      initialValues: initialValues,
      validationSchema: contactSchema,
      onSubmit: ({ name, surname, phone, email, message }) => {
        const emailData: contactValuesType = {
          name,
          surname,
          phone,
          email,
          message,
        };
        console.log(emailData);
        mutation.mutate(emailData);
      },
    });

  return (
    <FormEl onSubmit={handleSubmit}>
      <FieldContainer>
        <FieldLabel>{t("contact_form.name")}</FieldLabel>
        <Input
          type="text"
          name="name"
          onChange={handleChange}
          value={values.name}
          onBlur={handleBlur}
          className={touched.name && errors.name ? "error" : ""}
        />
        {errors.name && touched.name && <FormError>{errors.name}</FormError>}
      </FieldContainer>
      <FieldContainer>
        <FieldLabel>{t("contact_form.surname")}</FieldLabel>
        <Input
          type="text"
          name="surname"
          onChange={handleChange}
          value={values.surname}
          onBlur={handleBlur}
          className={errors.surname && touched.surname ? "error" : ""}
        />
        {errors.surname && touched.surname && <FormError>{errors.surname}</FormError>}
      </FieldContainer>
      <FieldContainer>
        <FieldLabel>{t("contact_form.phone")}</FieldLabel>
        <Input
          type="tel"
          name="phone"
          placeholder="380003003030"
          onChange={handleChange}
          value={values.phone}
          onBlur={handleBlur}
          className={errors.phone && touched.phone ? "error" : ""}
        />
        {errors.phone && touched.phone && <FormError>{errors.phone}</FormError>}
      </FieldContainer>
      <FieldContainer>
        <FieldLabel>{t("contact_form.email")}</FieldLabel>
        <Input
          type="email"
          name="email"
          onChange={handleChange}
          value={values.email}
          onBlur={handleBlur}
          className={errors.email && touched.email ? "error" : ""}
        />
        {errors.email && touched.email && <FormError>{errors.email}</FormError>}
      </FieldContainer>
      <FieldContainer>
        <FieldLabel>{t("contact_form.message")}</FieldLabel>
        <Textarea
          name="message"
          onChange={handleChange}
          value={values.message}
          onBlur={handleBlur}
          className={errors.message && touched.message ? "error" : ""}
        />
        {errors.message && touched.message && <FormError>{errors.message}</FormError>}
      </FieldContainer>
      <Button fullWidth variant="contained" type="submit" style={{ marginTop: "32px" }}>
        {t("buttons.send")}
      </Button>
    </FormEl>
  );
};
export default ContactForm;
