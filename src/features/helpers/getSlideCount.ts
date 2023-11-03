export const getSlideCount = (isAboveMd: boolean, isAboveXl: boolean): number => {
  if (isAboveXl) return 3;

  if (isAboveMd) return 2;

  return 1;
};
