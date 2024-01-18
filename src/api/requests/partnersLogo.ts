import { ResponseLogos } from "types/typePartnersLogos";

import { fetcher } from "api/fetcher";

import {fetcherPublic} from "../fetcherPublic";

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

export const fetchLogosList = () => {
  return fetcherPublic.get<ResponseLogos[]>("/api/logo/logos");
};
