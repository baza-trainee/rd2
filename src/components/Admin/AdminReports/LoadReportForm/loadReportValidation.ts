import { validFileType } from "helpers/admin/validateFileType";

const fileTypes = ["application/pdf"];

export const validateReport = (values: { reportFile?: File }) => {
  const errors: { reportFile?: string } = {};

  if (!values.reportFile) {
    errors.reportFile = "Спочатку виберіть файл";
  } else {
    if (!validFileType(values.reportFile, fileTypes)) {
      errors.reportFile = "Недозволений формат файлу";
    }
  }
  return errors;
};
