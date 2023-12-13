import axios from "axios";
import { useNavigate } from "react-router-dom";

import { AccessTokenService } from "services/AccessTokenService";
import { RefreshTokenService } from "services/RefreshTokenService";

const { getAccessToken, setAccessToken } = new AccessTokenService();
const { getRefreshToken } = new RefreshTokenService();

const BASE_URL = process.env.REACT_APP_BASE_URL;

export const api = axios.create({
  baseURL: BASE_URL,
});

api.interceptors.request.use(
  (config) => {
    const accessToken = getAccessToken();

    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }

    return config;
  },

  (error) => {
    return Promise.reject(error);
  },
);

api.interceptors.response.use(
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
          const newAccessTokenResponse = await api.post("/api/auth/refresh", {
            refresh_token: refreshToken,
          });

          const newAccessToken = newAccessTokenResponse.data.access_token;
          setAccessToken(newAccessToken);

          api.defaults.headers.common["Authorization"] = `Bearer ${newAccessToken}`;

          return api(originalRequest);
        } catch (refreshError) {
          const navigate = useNavigate();
          navigate("/admin");
        }
      }
    }

    return Promise.reject(error);
  },
);
