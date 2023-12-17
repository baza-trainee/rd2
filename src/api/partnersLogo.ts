import {api} from "./instanceApi";

export const addLogo = (data: File) => {
    return api.post("/api/logo/upload",
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