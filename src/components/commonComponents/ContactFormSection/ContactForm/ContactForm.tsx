/* eslint-disable max-len */
import {FC, useState} from "react";

import { useFormik } from "formik";
import { useMutation } from "react-query";
import { Button } from "@mui/material";
import { useTranslation } from "react-i18next";

import { contactValuesType } from "types/typeFeedbackUserDetails";
import { sendFeedback } from "api/requests/feedBackUsers";
import { loadData } from "api/requests/loadData";
import { contactSchema } from "components/commonComponents/ContactFormSection/ContactForm/updateValidationTranslation";
import {
  FormEl,
  FieldContainer,
  FieldLabel,
  Input,
  Textarea,
  FormError,
} from "components/commonComponents/ContactFormSection/ContactForm/Form.styled";

import {RequestFallback} from "../../RequestFallback/RequestFallback";

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

const ContactForm: FC<ContactFormProps> = ({ openModalSuccess, openModalError }) => {
  const { t } = useTranslation();

  const [showFallback, setShowFallback] = useState(false);

  const mutation = useMutation(
    (user: contactValuesType) => loadData(sendFeedback(user))(),
    {
      onError: (error: Error) => {
        setShowFallback(false);
        openModalError(`${t("message_modals.error_text")} ${error.message}`);
      },
      onSuccess: () => {
        setShowFallback(false);
        openModalSuccess();
        resetForm();
      },
    },
  );

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
        mutation.mutate(emailData);
        setShowFallback(true);
      },
    });

  return (
      <>

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

      <Button fullWidth variant="contained" type="submit" style={{ marginTop: "32px", height: "55px" }}>
        {!showFallback ? t("buttons.send") : <RequestFallback />}
      </Button>
    </FormEl>

    </>
  );
};

export default ContactForm;
