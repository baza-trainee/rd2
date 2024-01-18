export const getPageCount = (totalPages: number, limit: number): number => {
  return Math.ceil(totalPages / limit);
};
