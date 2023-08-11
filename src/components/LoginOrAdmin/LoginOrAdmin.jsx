'use client';
import AdminForm from '../AdminForm/AdminForm';
import AdminContent from '../AdminContent/AdminContent';
import { useSelector } from 'react-redux';
import authSelector from '@/src/redux/adminAuthApi/authSelectors';
import { useCheckTokenQuery } from '@/src/redux/adminAuthApi/authApi';

const LoginOrAdmin = () => {
  const isToken = useSelector(authSelector.authToken);
  const { data: tokenInfo, isSuccess } = useCheckTokenQuery(
    {},
    {
      skip: !isToken,
    }
  );

  if (isSuccess && tokenInfo) {
    return <AdminContent />;
  } else {
    return <AdminForm />;
  }
};

export default LoginOrAdmin;
