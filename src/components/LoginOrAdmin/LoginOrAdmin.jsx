'use client';
import AdminContent from '../AdminContent/AdminContent';
import AdminForm from '../AdminForm/AdminForm';
import { useSelector } from 'react-redux';
import authSelector from '@/src/redux/adminAuthApi/authSelectors';
import { useCheckTokenQuery } from '@/src/redux/adminAuthApi/authApi';

const LoginOrAdmin = () => {
  const isLoggedIn = useSelector(authSelector.getIsLoggedIn);
  const {
    data: tokenInfo,
    error,
    isSuccess,
    isLoading,
  } = useCheckTokenQuery({
    skip: !isLoggedIn,
    refetchOnMount: isLoggedIn,
  });

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (
    !isLoggedIn ||
    (error && error.status === 401 && error.data.message === 'Not authorized')
  ) {
    return <AdminForm />;
  } else if (isSuccess && tokenInfo) {
    return <AdminContent />;
  }
  return null;
};

export default LoginOrAdmin;
