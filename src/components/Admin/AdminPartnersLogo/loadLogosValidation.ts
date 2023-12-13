const validateImage = (values: { logoImg?: File }) => {

  const MAX_SIZE = 200000;
  const errors:{logoImg?: string} = {};

  if (!values.logoImg) {
    errors.logoImg = "Спочатку виберіть лого";
  } else if (values.logoImg.size > MAX_SIZE){
    errors.logoImg = "Максимальний дозволений розмір 200КБ";
  }
  return errors;
};


export { validateImage };
