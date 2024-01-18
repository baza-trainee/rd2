export const handleSlideToDisplay = (
  isAboveMd: boolean, //768
  isAboveLg: boolean, //1280
): number | string => {
  let numToDisplay: number | string = 1;

  if (isAboveMd || isAboveLg) {
    numToDisplay = "auto";
  }

  return numToDisplay;
};
