import React from 'react';
import useUserProfile from 'hooks/useUserProfile';

export default function UserProfile() {
  const { userData: user } = useUserProfile();

  return (
    <div>
      <h4>User Profile</h4>
      <p>{user?.username}</p>
    </div>
  );
}
