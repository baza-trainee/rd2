export const handleSlideToDisplay = (
  isSm: boolean,
  isMd: boolean,
  isXl: boolean,
): number => {
  let numToDisplay = 1.5;

  if (isXl) {
    numToDisplay = 5.5;
  } else if (isMd) {
    numToDisplay = 2.8;
  } else if (isSm) {
    numToDisplay = 1.5;
  }

  return numToDisplay;
};
