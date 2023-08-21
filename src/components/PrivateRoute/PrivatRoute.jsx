'use client';
import { useRouter } from 'next/navigation';
import { useSelector } from 'react-redux';
import authSelector from '@/src/redux/adminAuthApi/authSelectors';
import { useEffect, useState } from 'react';
import Spinner from '@/src/components/SpinerOferta/SpinerOferta';

const PrivatRoute = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const isLoggedIn = useSelector(authSelector.getIsLoggedIn);

  useEffect(() => {
    if (!isLoggedIn) {
      router.replace('/admin');
    } else {
      setLoading(false);
    }
  }, [isLoggedIn, router]);

  if (loading) {
    return <Spinner />;
  }

  return <>{children}</>;
};

export default PrivatRoute;
