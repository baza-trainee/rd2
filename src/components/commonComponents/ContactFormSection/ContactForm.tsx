import React from "react";
import { useFormik } from "formik";
import { Button } from "@mui/material";

import contactSchema from "helpers/contactFormValidationSchema";

import { contactValuesType } from "types/typeContactInitialValues";

import { FormEl, FieldContainer, FieldLabel, Input, Textarea, FormError } from "./Form.styled";

interface ContactFormProps {
  openModal: () => void;
}

const initialValues: contactValuesType = {
  name: "",
  surname: "",
  phone: "",
  email: "",
  message: "",
};

const ContactForm: React.FC<ContactFormProps> = ({openModal}) => {

  const {values, errors, touched, handleBlur, handleChange, handleSubmit, resetForm} = useFormik({
    initialValues: initialValues,
    validationSchema: contactSchema,
    onSubmit: ({ name, surname, phone, email, message }) => {
      // send to email
      const emailData = {
        name,
        surname,
        phone,
        email,
        message,
      };
      // eslint-disable-next-line
      console.log(emailData);
      // await sendEmail(emailData);
      resetForm();
      openModal();
    },
  });
  return <FormEl onSubmit={handleSubmit}>
    <FieldContainer>
      <FieldLabel>Ім’я</FieldLabel>
      <Input type="text"
        name="name"
        onChange={handleChange}
        value={values.name}
        onBlur={handleBlur}
        className={touched.name && errors.name ? "error" : ""}
      />
      {errors.name && touched.name && <FormError>{errors.name}</FormError>}
    </FieldContainer>
    <FieldContainer>
      <FieldLabel>Фамілія</FieldLabel>
      <Input type="text"
        name="surname"
        onChange={handleChange}
        value={values.surname}
        onBlur={handleBlur}
        className={errors.surname && touched.surname ? "error" : ""}
      />
      {errors.surname && touched.surname && <FormError>{errors.surname}</FormError>}
    </FieldContainer>
    <FieldContainer>
      <FieldLabel>Телефон</FieldLabel>
      <Input type="tel"
        name="phone"
        onChange={handleChange}
        value={values.phone}
        onBlur={handleBlur}
        className={errors.phone && touched.phone ? "error" : ""}
      />
      {errors.phone && touched.phone && <FormError>{errors.phone}</FormError>}
    </FieldContainer>
    <FieldContainer>
      <FieldLabel>E-mail</FieldLabel>
      <Input type="email"
        name="email"
        onChange={handleChange}
        value={values.email}
        onBlur={handleBlur}
        className={errors.email && touched.email ? "error" : ""}
      />
      {errors.email && touched.email && <FormError>{errors.email}</FormError>}
    </FieldContainer>
    <FieldContainer>
      <FieldLabel>Повідомлення</FieldLabel>
      <Textarea name="message"
        onChange={handleChange}
        value={values.message}
        onBlur={handleBlur}
        className={errors.message && touched.message ? "error" : ""}
      />
      {errors.message && touched.message && <FormError>{errors.message}</FormError>}
    </FieldContainer>
    <Button fullWidth variant="contained" type="submit" style={{marginTop: "32px"}}>
        Надіслати
    </Button>
  </FormEl>;
};
export default ContactForm;