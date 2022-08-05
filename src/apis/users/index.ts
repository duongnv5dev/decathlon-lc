import { RegisterUserPayload, User } from './typings';

export const registerUser = (payload: RegisterUserPayload) => {
  // TODO: implement register api
  return new Promise<User>((resolve) => {
    resolve({
      id: 1,
      isActive: true,
      username: payload.username,
      password: payload.password,
    });
  });
};

export const signIn = async (
  payload: RegisterUserPayload,
): Promise<User | undefined> => {
  // TODO: implement signIn api
  try {
    const user = await new Promise<User>((resolve) => {
      resolve({
        id: 1,
        isActive: true,
        username: payload.username,
        password: payload.password,
      });
    });

    if (!user) {
      return undefined;
    }
    localStorage.setItem('c_user', JSON.stringify(user));
    return user;
  } catch (error) {
    return undefined;
  }
};
