import { ReactNode } from 'react';
import { User } from 'apis/users/typings';

export type AuthState = {
  user?: User;
  logIn?: (username: string, password: string) => Promise<User | undefined>;
  logOut?: () => void;
};

export type AuthProviderProps = {
  children: ReactNode;
};
