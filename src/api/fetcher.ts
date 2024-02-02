import axios from "axios";
import { useNavigate } from "react-router-dom";

import { AccessTokenService } from "services/AccessTokenService";
import { RefreshTokenService } from "services/RefreshTokenService";

const { getAccessToken, setAccessToken } = new AccessTokenService();
const { getRefreshToken } = new RefreshTokenService();

export const BASE_URL = process.env.REACT_APP_BASE_URL; //"http://ec2-13-53-205-68.eu-north-1.compute.amazonaws.com";

export const fetcher = axios.create({
  baseURL: BASE_URL,
});

fetcher.interceptors.request.use(
  (config) => {
    const accessToken = getAccessToken();

    if (accessToken) {
      config.headers.Authorization = accessToken;
    }

    return config;
  },

  (error) => {
    return Promise.reject(error);
  },
);

fetcher.interceptors.response.use(
  (response) => {
    return response;
  },

  async (error) => {
    const originalRequest = error.config;

    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      const refreshToken = getRefreshToken();

      if (refreshToken) {
        try {
          const newAccessTokenResponse = await fetcher.post("/api/auth/refresh", {
            refresh_token: refreshToken,
          });
          const newAccessToken = newAccessTokenResponse.data.access_token;
          setAccessToken(newAccessToken);
          fetcher.defaults.headers.common["Authorization"] = newAccessToken;

          return fetcher(originalRequest);
        } catch (refreshError) {
          const navigate = useNavigate();
          navigate("/admin");
        }
      }
    }

    return Promise.reject(error);
  },
);
