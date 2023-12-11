export const handleSlideToDisplay = (
  lengthOflist: number,
  isAboveMd: boolean,
  isAboveLg: boolean,
): number => {
  let numToDisplay = 1;

  if ((isAboveMd || isAboveLg) && lengthOflist <= 3) {
    numToDisplay = lengthOflist;
  }

  if (isAboveMd && lengthOflist > 3) {
    numToDisplay = 3;
  }

  if (isAboveLg && lengthOflist < 6) {
    numToDisplay = lengthOflist;
  }

  if (isAboveLg && lengthOflist >= 6) {
    numToDisplay = 5;
  }

  return numToDisplay;
};
