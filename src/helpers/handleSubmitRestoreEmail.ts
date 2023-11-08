import { FormikHelpers } from "formik";

export const handleSubmitRestoreEmail = (
  values: { email: string },
  formikHelpers: FormikHelpers<{ email: string }>,
) => {
  formikHelpers.resetForm();
};
