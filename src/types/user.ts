export interface User {
  id: string;
  name: string;
  email: string;
}

export interface Login {
  email: string;
  password: string;
}

export interface Auth0User {
  name: string;
  email: string;
}
