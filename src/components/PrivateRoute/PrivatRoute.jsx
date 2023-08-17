'use client';
import { useRouter } from 'next/navigation';
import { useSelector } from 'react-redux';
import authSelector from '@/src/redux/adminAuthApi/authSelectors';
import { useEffect, useState } from 'react';

const PrivatRoute = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const isLoggedIn = useSelector(authSelector.getIsLoggedIn);

  useEffect(() => {
    if (!isLoggedIn) {
      router.replace('/home');
    } else {
      setLoading(false);
    }
  }, [isLoggedIn, router]);

  if (loading) {
    return <p>Loading...</p>;
  }

  return <>{children}</>;
};

export default PrivatRoute;
