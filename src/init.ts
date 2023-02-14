import http, { authHttp } from "./api";
import * as interceptors from "./api/interceptor";

/**
 * Initialize interceptors for the application.
 *
 */
function initInterceptors() {
  http.interceptors.request.use(interceptors.requestInterceptor);
  http.interceptors.response.use(
    (response) => response,
    /**
     * This interceptor checks if the response had a 401 status code, which means
     * that the access token used for the request has expired. It then refreshes
     * the access token and resends the original request.
     */
    interceptors.responseInterceptor
  );

  authHttp.interceptors.response.use(
    (response) => response,
    interceptors.responseInterceptor
  );
}

/**
 * Initialize the axios interceptor and sentry
 */
export default function init() {
  initInterceptors();
}
