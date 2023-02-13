import { PersistParams } from "../types/token";
import * as storage from "../utils/storage";
import { ACCESS_TOKEN, ID_TOKEN, REFRESH_TOKEN } from "../constants/storage";

/**
 * Persist token to storage.
 *
 * @param {{accessToken, refreshToken,idToken, rememberMe}} params
 */
export function persistAuthTokens({ accessToken }: PersistParams) {
  setAccessToken(accessToken);
}

/**
 * Get access token from storage.
 *
 * @returns {string}
 */
export function getAccessToken() {
  return storage.get(ACCESS_TOKEN);
}

/**
 * Set access token to storage.
 *
 * @param {string} accessToken
 */
export function setAccessToken(accessToken: string) {
  storage.set(ACCESS_TOKEN, accessToken);
}

/**
 * Get refresh token from storage.
 *
 * @returns {string}
 */
export function getRefreshToken() {
  return storage.get(REFRESH_TOKEN);
}

/**
 * Set refresh token to storage.
 *
 * @param {string} refreshToken
 * @returns {string}
 */
export function setRefreshToken(refreshToken: string) {
  return storage.set(REFRESH_TOKEN, refreshToken);
}

/**
 * Get JWT id token from storage.
 *
 * @returns {string}
 */
export function getIdToken() {
  return storage.get(ID_TOKEN);
}

/**
 * Set JWT id token to storage.
 *
 * @param {string} idToken
 * @returns {string}
 */
export function setIdToken(idToken: string) {
  return storage.set(ID_TOKEN, idToken);
}
