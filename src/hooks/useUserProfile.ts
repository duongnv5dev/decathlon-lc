import { User } from 'apis/users/typings';

/**
 * Example hook
 * @returns User data
 */
export default function useUserProfile() {
  const localUser = localStorage.getItem('c_user');
  return {
    userData: localUser ? (JSON.parse(localUser) as User) : undefined,
  };
}
