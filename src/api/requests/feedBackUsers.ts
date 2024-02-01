import { contactValuesType, ResponseUserDetails } from "types/typeFeedbackUserDetails";

import { fetcher } from "api/fetcher";

import { fetcherPublic } from "api/fetcherPublic";

export interface IUserFeedback {
  name: string;
  surname: string;
  id: string;
}

export const sendFeedback = (user: contactValuesType) => {
  const msgDate = new Date();
  return () =>
    fetcherPublic.post<ResponseUserDetails>(
      "api/user/create-user",
      {
        obj_in: {
          name: user.name,
          surname: user.surname,
          phone: user.phone,
          email: user.email,
        },
        message: {
          msg: user.message,
          created_at: msgDate,
        },
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      },
    );
};
export const fetchUsersList = () => {
  return fetcher.get<IUserFeedback[]>("/api/user/");
};

export const fetchUserFeedback = (id: string | undefined) => {
  return () => fetcher.get<ResponseUserDetails>(`/api/user/${id}`);
};

export const loadUsersListReport = () => {
  return fetcher.get("/api/user/download-report", {
    responseType: "blob",
  });
};
