import axios, { AxiosResponse } from "axios";

export function loadData(func: () => Promise<AxiosResponse<any, any>>) {
  return async () => {
    try {
      const promise = func();

      const response = await promise;

      return response.data;

    } catch (error) {
      let errMes: string = "";

      if (axios.isAxiosError(error)) errMes = error.message;

      console.log(error);

      throw Error(`Виникла помилка при завантаженні даних. ${errMes}`);
    }
  };
}
