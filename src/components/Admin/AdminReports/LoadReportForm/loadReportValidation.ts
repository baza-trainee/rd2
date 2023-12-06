const validateReport = (values: { reportFile?: File }) => {

  const errors:{reportFile?: string} = {};

  if (!values.reportFile) errors.reportFile = "Спочатку виберіть файл";
  return errors;
};


export { validateReport };
