import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link, Outlet } from 'react-router-dom';
import { APP_NAME } from 'constants/';
import styles from './styles';

export default function Home() {
  const { t } = useTranslation();

  return (
    <div>
      <h2>{t('welcome', { appName: APP_NAME })}</h2>
      <div className={styles.nav}>
        <Link to="/login">Login</Link>
        <br />
        <Link to="/signup">Sign Up</Link>
        <br />
        <Link to="/user-profile">User</Link>
      </div>
      <Outlet />
    </div>
  );
}
