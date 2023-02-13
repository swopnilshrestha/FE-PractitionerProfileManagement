import http from "../../api";
import config from "../../config";
import { Login } from "../../types/user";

export const userLogin = async (data: Login) => {
  const url = config.endpoints.auth.login;
  const response = await http.post(url, data);
  return response.data;
};

export const userSignUp = async (data: Login) => {
  const url = config.endpoints.auth.register;
  return await http.post(url, data);
};
