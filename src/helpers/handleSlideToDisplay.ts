export const handleSlideToDisplay = (
  //lengthOflist: number,
  isAboveMd: boolean,//768
  isAboveLg: boolean,//1280
): number | string => {
  let numToDisplay: number | string = 1;

  //if ((isAboveMd || isAboveLg) && lengthOflist <= 3) {
    //numToDisplay = lengthOflist;
  //}

  //if (isAboveMd && lengthOflist > 3) {
    //numToDisplay = 3;
  //}

  if (isAboveMd || isAboveLg) {
    numToDisplay = "auto";
  }

  //if (isAboveLg && lengthOflist < 6) {
    //numToDisplay = lengthOflist;
  //}

  //if (isAboveLg && lengthOflist >= 6) {
    //numToDisplay = 6;
  //}

  return numToDisplay;
};
