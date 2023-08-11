'use client';
import { useSelector } from 'react-redux';
import authSelector from '@/src/redux/adminAuthApi/authSelectors';
import LoginOrAdmin from '../LoginOrAdmin/LoginOrAdmin';

const AdminPanel = () => {
  const isRefreshing = useSelector(authSelector.getIsRefreshing);

  return <>{isRefreshing ? <p>Loading admin...</p> : <LoginOrAdmin />}</>;
};

export default AdminPanel;
