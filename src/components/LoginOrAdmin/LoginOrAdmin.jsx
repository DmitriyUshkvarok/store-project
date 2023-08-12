'use client';
import AdminPage from '@/src/app/admin-panel/page';
import AdminLogin from '@/src/app/admin-login/page';
import { useSelector } from 'react-redux';
import authSelector from '@/src/redux/adminAuthApi/authSelectors';
import { useCheckTokenQuery } from '@/src/redux/adminAuthApi/authApi';

const LoginOrAdmin = () => {
  const isToken = useSelector(authSelector.authToken);
  const {
    data: tokenInfo,
    error,
    isSuccess,
  } = useCheckTokenQuery({
    skip: !isToken,
  });

  if (
    !isToken ||
    (error && error.status === 401 && error.data.message === 'Not authorized')
  ) {
    return <AdminLogin />;
  } else if (isSuccess && tokenInfo) {
    return <AdminPage />;
  }
};

export default LoginOrAdmin;
