import { FormikHelpers } from "formik";

import { FormContacts } from "types/formContacts";

export const handleAdminOurContactsForm = (
  _: FormContacts,
  formikHelpers: FormikHelpers<FormContacts>,
) => {
  formikHelpers.resetForm();
};
