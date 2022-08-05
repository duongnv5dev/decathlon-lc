import React, {
  createContext,
  ReactElement,
  useContext,
  useEffect,
  useState,
} from 'react';
import { User } from 'apis/users/typings';
import { AuthProviderProps, AuthState } from './typings';
import { signIn } from 'apis/users';

const AuthContext = createContext<AuthState>({});

export const useAuth = (): AuthState | null => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }: AuthProviderProps): ReactElement => {
  const [user, setUser] = useState<User>();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const localUser = localStorage.getItem('c_user');
    setUser(localUser ? JSON.parse(localUser) : undefined);
    setLoading(false);
  }, []);

  const logIn = async (username: string, password: string) => {
    const user = await signIn({ username, password });
    setUser(user);
    return user;
  };

  const logOut = () => {
    localStorage.removeItem('c_user');
    window.location.reload();
  };

  const value: AuthState = {
    user,
    logIn,
    logOut,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};
