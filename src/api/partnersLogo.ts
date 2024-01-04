import {fetcher} from "./fetcher";

interface ResponseLogosList {
  id: number;
  filename: string;
  description: string;
  path: string;
}

export const addLogo = (data: File) => {
  return () =>
    fetcher.post(
      "/api/logo/upload",
      {
        file: data,
        description: "partnersLogo",
      },
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      },
    );
};

export const  fetchLogosList = () => {

  return fetcher.get<ResponseLogosList[]>("/api/logo/logos");

};
