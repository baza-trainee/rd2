import { fetcher } from "api/fetcher";

import {fetcherPublic} from "api/fetcherPublic";

export const addReport = (data: File) => {
  return () =>
    fetcher.post(
      "/api/report/reports",
      {
        file: data,
      },
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      },
    );
};

export const addPrivatePolicy = (data: File) => {
  return () =>
    fetcher.post(
      "/api/report/private-policy",
      {
        file: data,
      },
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      },
    );
};

export const addTermsUse = (data: File) => {
  return () =>
    fetcher.post(
      "/api/report/terms-use",
      {
        file: data,
      },
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      },
    );
};

export const getReportFile = (path: string) => {
  return () =>
      fetcherPublic.get(path, {
      responseType: "blob",
    });
};
