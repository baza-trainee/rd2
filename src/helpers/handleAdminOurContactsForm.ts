import { FormikHelpers } from "formik";

import { FormContacts } from "types/formContacts";

export const handleAdminOurContactsForm = (
  values: FormContacts,
  formikHelpers: FormikHelpers<FormContacts>,
) => {
  formikHelpers.resetForm();
};
