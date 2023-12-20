import { fetcher } from "./fetcher";

export const addLogo = (data: File) => {
    return () => fetcher.post("/api/logo/upload",
            {
                  file: data,
                  description: "partnersLogo",
                },
            {
                  headers: {
                    "Content-Type": "multipart/form-data",
                  },
                },
              )
}