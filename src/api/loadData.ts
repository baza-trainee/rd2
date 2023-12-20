import axios, { AxiosError, AxiosResponse } from "axios";

export function loadData(func: () => Promise<AxiosResponse<any, any>>) {
  return async () => {
    try {
      const promise = func();

      const response = await promise;

      return response.data;
    } catch (error: any | AxiosError) {
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
