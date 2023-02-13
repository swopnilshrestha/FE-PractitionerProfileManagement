import config from "../config";
import axios from "axios";

/**
 * Http axios instance with bearer_token inject interceptor
 */
const http = axios.create({
  baseURL: config.baseURI,
  headers: {
    "Content-Type": "application/json",
  },
});

/**
 * Http auth axios instance without bearer token inject interceptor
 */
const authHttp = axios.create({
  baseURL: config.baseURI,
  headers: {
    "Content-Type": "application/json",
  },
});

export { authHttp };
export default http;
