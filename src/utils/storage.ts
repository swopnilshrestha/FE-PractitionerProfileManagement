import {
  ACCESS_TOKEN,
  ID_TOKEN,
  IMPERSONATE_REQUEST_HEADER,
  MFA_TOKEN,
  OOB_CODE,
  ORGANIZATION_REQUEST_HEADER,
  REFRESH_TOKEN,
} from "../constants/storage";
// import { UserResponse } from "types";

/**
 * Get value from storage for given key.
 *
 * @param  {string}  key
 * @return {string}
 */
export function get(key: string) {
  const value = localStorage.getItem(key);

  if (!value) {
    return null;
  }

  return JSON.parse(value);
}

/**
 * Set key value pair in storage.
 *
 * @param {string} key
 * @param {string} value
 */
export function set(key: string, value: string) {
  localStorage.setItem(key, JSON.stringify(value));
}

/**
 * Remove key value pair in storage.
 *
 * @param {string} key
 */
export function remove(key: string) {
  localStorage.removeItem(key);
}

/**
 * Sets login redirect url
 *
 * @param {string} url
 */
export function setLoginRedirectUrl(url: string) {
  localStorage.setItem("redirectUrl", url);
}

/**
 * Fetches login redirect url
 */
export function getLoginRedirectUrl() {
  return localStorage.getItem("redirectUrl");
}

/**
 * Removes login redirect url
 */
export function removeLoginRedirectUrl() {
  remove("redirectUrl");
}

/**
 * Clear storage.
 *
 * @return {string}
 */
export function clear() {
  remove(ID_TOKEN);
  remove(ACCESS_TOKEN);
  remove(REFRESH_TOKEN);
  remove(MFA_TOKEN);
  remove(OOB_CODE);
  removeImpersonateId();
  removeCurrentOrganizationId();
}

export const setImpersonateId = (userId: string, orgId: string) => {
  localStorage.setItem(IMPERSONATE_REQUEST_HEADER.USER_ID, userId);
  localStorage.setItem(IMPERSONATE_REQUEST_HEADER.ORG_ID, orgId);
};

export const setImpersonateOrgId = (orgId: string) => {
  localStorage.setItem(IMPERSONATE_REQUEST_HEADER.ORG_ID, orgId);
};

export const getImpersonateId = () => {
  return {
    impersonateUserId: localStorage.getItem(IMPERSONATE_REQUEST_HEADER.USER_ID),
    impersonateUserOrgId: localStorage.getItem(
      IMPERSONATE_REQUEST_HEADER.ORG_ID
    ),
  };
};

export const removeImpersonateId = () => {
  localStorage.removeItem(IMPERSONATE_REQUEST_HEADER.USER_ID);
  localStorage.removeItem(IMPERSONATE_REQUEST_HEADER.ORG_ID);
};

export const setCurrentOrganizationId = (orgId: string) => {
  localStorage.setItem(ORGANIZATION_REQUEST_HEADER, orgId);
};

export const getCurrentOrganizationId = () => {
  return localStorage.getItem(ORGANIZATION_REQUEST_HEADER);
};

export const removeCurrentOrganizationId = () => {
  localStorage.removeItem(ORGANIZATION_REQUEST_HEADER);
};

export const setOrganizationId = (orgId: string) => {
  const { impersonateUserId } = getImpersonateId();

  if (impersonateUserId) {
    setImpersonateOrgId(orgId);
  } else {
    setCurrentOrganizationId(orgId);
  }
};

// export function syncOrganizationIdInLocalStorage(
//   currentUserResponse: UserResponse
// ) {
//   /* Update the organization ID in localStorage  if the response of users.self api has different
//     organizationID in response then currently set organization id
//      */

//   const newOrganizationId = currentUserResponse.organization?.id;
//   if (!newOrganizationId) {
//     return;
//   }

//   if (newOrganizationId !== getCurrentOrganizationId()) {
//     localStorage.setItem(ORGANIZATION_REQUEST_HEADER, newOrganizationId);
//   }
// }
