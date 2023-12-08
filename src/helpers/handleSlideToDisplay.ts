export const handleSlideToDisplay = (
  isAboveSm: boolean,
  isAboveMd: boolean,
  isAboveLg: boolean,
): number => {
  let numToDisplay = 1.5;

  if (isAboveLg) {
    numToDisplay = 5;
  } else if (isAboveMd) {
    numToDisplay = 2.8;
  } else if (isAboveSm) {
    numToDisplay = 1.5;
  }

  return numToDisplay;
};
