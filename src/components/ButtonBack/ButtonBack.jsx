'use client';
import { StyleButtonBack } from './ButtonBack.styled';
import { useRouter } from 'next/navigation';

const ButtonBack = () => {
  const router = useRouter();

  const handleBack = () => {
    router.back();
  };

  return (
    <StyleButtonBack type="button" onClick={handleBack}>
      Назад
    </StyleButtonBack>
  );
};

export default ButtonBack;
