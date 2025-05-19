import { create } from "apisauce";
//
import { API_BASE_URL, API_TOKEN } from "@env";

const api = create({
  baseURL: API_BASE_URL,
  headers: {
    "x-token": API_TOKEN,
  },
});

export default api;
