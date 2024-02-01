export const handleSlideToDisplay = (
  isAboveMd: boolean,
  isAboveLg: boolean,
): number | "auto" => {
  let numToDisplay: number | "auto" = 1;

  if (isAboveMd || isAboveLg) {
    numToDisplay = "auto";
  }

  return numToDisplay;
};
