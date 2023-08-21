'use client';
import AdminContent from '../AdminContent/AdminContent';
import AdminForm from '../AdminForm/AdminForm';
import { useSelector } from 'react-redux';
import authSelector from '@/src/redux/adminAuthApi/authSelectors';
import { useCheckTokenQuery } from '@/src/redux/adminAuthApi/authApi';
import Spinner from '@/src/components/SpinerOferta/SpinerOferta';

const LoginOrAdmin = () => {
  const isLoggedIn = useSelector(authSelector.getIsLoggedIn);
  const {
    data: tokenInfo,
    error,
    isSuccess,
    isLoading,
  } = useCheckTokenQuery({
    skip: !isLoggedIn,
    refetchOnMount: true,
  });

  if (isLoading) {
    return <Spinner />;
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
