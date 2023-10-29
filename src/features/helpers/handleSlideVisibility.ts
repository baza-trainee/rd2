export const handleSlideVisibility = (
  isSm: boolean,
  isMd: boolean,
  isXl: boolean,
): number => {
  let count = 1;
  if (isXl) {
    count = 3;
  } else if (isMd) {
    count = 2;
  } else if (isSm) {
    count = 1;
  }
  return count;
};
