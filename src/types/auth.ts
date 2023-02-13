import { Auth0User } from "./user";

export interface AuthSliceStateProps {
  isLoggedIn: boolean;
  isLoggingIn: boolean;
  currentAuth0User: Auth0User | null;
  error?: string;
}

export interface AuthResponseProps {
  accessToken: string;
  //   refreshToken: string;
  //   idToken: string;
  //   scope?: string;
  //   expiresIn: number;
  //   tokenType?: string;
  //   rememberMeToken?: string;
  //   type: string;
}

export interface AuthResponseWithMfaToken {
  mfaToken: string;
  type: string;
  oobCode: string;
}

export interface LoginCredentials {
  email: string;
  password: string;
  rememberMeToken?: string;
}

export interface VerifyMfaInitialProps {
  verificationCode: string;
  rememberMe: boolean;
  oobCode?: string;
  mfaToken?: string;
}
