import React, { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import RequireAuth from 'components/RequireAuth';

const NotFound = lazy(() => import('pages/404'));
const Home = lazy(() => import('pages/Home'));
const Login = lazy(() => import('pages/Login'));
const Signup = lazy(() => import('pages/Signup'));
const UserProfile = lazy(() => import('pages/UserProfile'));

export default function routes() {
  return (
    <Suspense fallback={null}>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route
          path="/"
          element={
            <RequireAuth>
              <Home />
            </RequireAuth>
          }
        >
          <Route path="/user-profile" element={<UserProfile />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  );
}
