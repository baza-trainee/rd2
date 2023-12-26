import axios, { AxiosError, AxiosResponse } from "axios";

export function loadData<T>(func: () => Promise<AxiosResponse<T, AxiosError>>) {
  return async () => {
    try {
      const promise = func();

      const response = await promise;

      return response.data;
    } catch (error: unknown | AxiosError) {
      let errMes: string = " ";

      if (axios.isAxiosError(error)) {
        if (error.response) {
          const response = error.response;
          errMes = `Status ${response.status}. ${response.data?.detail}`;
        } else {
          errMes = error.message;
        }
      }

      throw Error(`Виникла помилка. ${errMes}`);
    }
  };
}
