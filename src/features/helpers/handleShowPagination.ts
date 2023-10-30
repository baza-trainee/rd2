export const handleShowPagination = (isMd: boolean, isXl: boolean): boolean => {
  let isVisible: boolean = true;

  if (!(isMd || isXl)) {
    isVisible = true;
  } else {
    isVisible = false;
  }
  return isVisible;
};
