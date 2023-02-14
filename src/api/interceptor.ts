import { AxiosError } from "axios";
import { USER_BLOCKED } from "../constants/errors";
import { getAccessToken } from "../services/token";
import { store } from "../store";
import { setIsLoggedIn } from "../store/auth/authSlice";
import { resetCurrentUser } from "../store/user/user.slice";
import { userLogout } from "../services/user/user.service";

const AUTHORIZATION_HEADER = "Authorization";

/**
 * Build authorization header
 *
 * @param {string} accessToken
 * @returns {string}
 */
function buildAuthHeader(accessToken: string) {
  return `Bearer ${accessToken}`;
}

export function requestInterceptor(request: any) {
  const accessToken = getAccessToken();
  if (
    accessToken &&
    request.headers &&
    !request.headers[AUTHORIZATION_HEADER]
  ) {
    request.headers[AUTHORIZATION_HEADER] = buildAuthHeader(accessToken);
  }

  return request;
}

export async function responseInterceptor(error: AxiosError<any>) {
  if (error.response?.data.type === USER_BLOCKED) {
    userLogout();
    store.dispatch(setIsLoggedIn(false));
    store.dispatch(resetCurrentUser());
  }

  return Promise.reject(error);
}
