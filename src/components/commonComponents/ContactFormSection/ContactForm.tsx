import React from "react";
import { useFormik } from "formik";
import { Button } from "@mui/material";

import contactSchema from "helpers/contactFormValidationSchema";
import { ContactFormProps } from "types/interfaceContactFormProps";
import { contactValuesType } from "types/typeContactInitialValues";

import { FormEl, FieldContainer, FieldLabel, Input, Textarea, FormError } from "./Form.styled";

const initialValues: contactValuesType = {
  name: "",
  phone: "",
  email: "",
  message: "",
};

const ContactForm: React.FC<ContactFormProps> = ({setModal}) => {

  const {values, errors, touched, handleBlur, handleChange, handleSubmit, resetForm} = useFormik({
    initialValues: initialValues,
    validationSchema: contactSchema,
    onSubmit: ({ name, phone, email, message }) => {
      // send to email
      const emailData = {
        name,
        phone,
        email,
        message,
      };
      // eslint-disable-next-line
      console.log(emailData);
      // await sendEmail(emailData);
      resetForm();
      setModal(true);
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
        style={{
          border: errors.name && touched.name
            ? "2px solid #D60A0A"
            : "1px solid #F5F5F5",
        }}/>
      {errors.name && touched.name && <FormError>{errors.name}</FormError>}
    </FieldContainer>
    <FieldContainer>
      <FieldLabel>Телефон</FieldLabel>
      <Input type="tel"
        name="phone"
        onChange={handleChange}
        value={values.phone}
        onBlur={handleBlur}
        style={{
          border: errors.phone && touched.phone
            ? "2px solid #D60A0A"
            : "1px solid #F5F5F5",
        }}/>
      {errors.phone && touched.phone && <FormError>{errors.phone}</FormError>}
    </FieldContainer>
    <FieldContainer>
      <FieldLabel>E-mail</FieldLabel>
      <Input type="email"
        name="email"
        onChange={handleChange}
        value={values.email}
        onBlur={handleBlur}
        style={{
          border: errors.email && touched.email
            ? "2px solid #D60A0A"
            : "1px solid #F5F5F5",
        }}/>
      {errors.email && touched.email && <FormError>{errors.email}</FormError>}
    </FieldContainer>
    <FieldContainer>
      <FieldLabel>Повідомлення</FieldLabel>
      <Textarea name="message"
        onChange={handleChange}
        value={values.message}
        onBlur={handleBlur}
        style={{
          border: errors.message && touched.message
            ? "2px solid #D60A0A"
            : "1px solid #F5F5F5",
        }}
      />
      {errors.message && touched.message && <FormError>{errors.message}</FormError>}
    </FieldContainer>
    <Button fullWidth variant="contained" type="submit" style={{marginTop: "32px"}}>
        Надіслати
    </Button>
  </FormEl>;
};
export default ContactForm;