import axios from "axios";

export const apiClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_ZEFAAF_API_URL ?? "https://api.dev.zefaafapi.com",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

apiClient.interceptors.request.use((config) => {
  if (typeof window === "undefined") return config;

  const locale = window.location.pathname.split("/").filter(Boolean)[0] || "ar";
  config.headers.set("Accept-Language", locale);

  const token = window.localStorage.getItem("token");
  if (token) config.headers.set("Authorization", `Bearer ${token}`);

  return config;
});
