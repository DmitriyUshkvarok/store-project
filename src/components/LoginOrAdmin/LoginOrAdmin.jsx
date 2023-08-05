'use client';
import AdminForm from '../AdminForm/AdminForm';
import AdminContent from '../AdminContent/AdminContent';
import { useSelector } from 'react-redux';
import authSelector from '@/src/redux/adminAuthApi/authSelectors';

const LoginOrAdmin = () => {
  const isToken = useSelector(authSelector.authToken);
  return <>{isToken ? <AdminContent /> : <AdminForm />}</>;
};

export default LoginOrAdmin;
