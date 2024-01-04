const twentyFourHoursInMs = 1000 * 60 * 60 * 24;

export const clientConfig = {
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: true,
      refetchOnMount: true,
      refetchOnReconnect: true,
      //retry: true,
      staleTime: twentyFourHoursInMs,
    },
  },
};
