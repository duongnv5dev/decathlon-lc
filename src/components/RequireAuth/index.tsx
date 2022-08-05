import React, { ReactElement, Suspense } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from 'contexts/AuthContext';

export default function RequireAuth({
  children,
}: {
  children: JSX.Element;
}): ReactElement {
  const auth = useAuth();
  const location = useLocation();

  if (auth?.user) {
    return children;
  }

  return (
    <Suspense>
      <Navigate to="/login" state={{ from: location }} replace />;
    </Suspense>
  );
}
