/* eslint-disable max-len */
import * as yup from "yup";

import i18next from "../../../../translation/i18next";

import {CreateContactSchema}
  from "./contactFormValidationSchema";

/*type ErrorMes = {
    inputMaxLength: string;
    inputMinLength: string;
    onlyLetter: string;
    requiredName: string;
    requiredSurname: string;
    requiredEmail: string;
    requiredPhone: string;
    requiredField: string;
    validationError: string;
    messageMaxLength: string;
    messageMinLength: string;
}*/

const data:any ={};
function updateValidationTranslations () {

  data.inputMaxLength =  i18next.t("validation.input_max_length");
  data.inputMinLength = i18next.t("validation.input_min_length");
  data.onlyLetter = i18next.t("validation.only_letter");
  data.requiredName = i18next.t("validation.required_name");
  data.requiredSurname = i18next.t("validation.required_surname");
  data.requiredEmail = i18next.t("validation.required_email");
  data.requiredPhone = i18next.t("validation.required_phone");
  data.requiredField = i18next.t("validation.required_field");
  data.validationError = i18next.t("validation.validation_error");
  data.messageMaxLength = i18next.t("validation.message_max_length");
  data.messageMinLength = i18next.t("validation.message_min_length");

}

let contactSchema:yup.ObjectSchema<{name:string, surname:string, email:string, phone:string, message:string}>;

if (i18next.isInitialized) {
  updateValidationTranslations();
  contactSchema = CreateContactSchema(data);
}

i18next.on("languageChanged", function() {
  updateValidationTranslations();
  contactSchema = CreateContactSchema(data);
});

export {updateValidationTranslations, contactSchema};