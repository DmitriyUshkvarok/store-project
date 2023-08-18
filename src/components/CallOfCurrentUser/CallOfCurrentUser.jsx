'use client';
import { useCheckTokenQuery } from '@/src/redux/adminAuthApi/authApi';
import authSelector from '@/src/redux/adminAuthApi/authSelectors';
import { useSelector } from 'react-redux';

const CallOfCurrentUser = ({ children }) => {
  const isLoggedIn = useSelector(authSelector.getIsLoggedIn);
  const isRefreshing = useSelector(authSelector.getIsRefreshing);
  const { data } = useCheckTokenQuery({
    skip: !isLoggedIn,
    refetchOnMount: isLoggedIn,
  });

  if (isRefreshing) {
    return <p>Loading...</p>;
  }

  return <>{children}</>;
};

export default CallOfCurrentUser;
