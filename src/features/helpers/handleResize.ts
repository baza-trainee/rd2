export const handleResize = (isXl: boolean, isMd: boolean, isSm: boolean): number => {
  let numToDisplay = 1;

  if (isXl) {
    numToDisplay = 5.5;
  } else if (isMd) {
    numToDisplay = 2.8;
  } else if (isSm) {
    numToDisplay = 1.5;
  }

  return numToDisplay;
};
