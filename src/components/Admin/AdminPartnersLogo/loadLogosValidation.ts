import {validFileType} from "../../../helpers/admin/validateFileType";

const fileTypes = ["image/jpeg", "image/jpg", "image/png", "image/webp", "image/svg"];


const validateImage = (values: { logoImg?: File }) => {

  const MAX_SIZE = 100000;
  const errors:{logoImg?: string} = {};

  if (!values.logoImg) {
    errors.logoImg = "Спочатку виберіть лого";
  } else {
      if (!validFileType(values.logoImg, fileTypes)) {
          errors.logoImg = "Недозволений формат лого";
      }

      if (values.logoImg.size > MAX_SIZE){
        errors.logoImg = "Максимальний дозволений розмір 100КБ";
      }
  }
  return errors;
};


export { validateImage };
