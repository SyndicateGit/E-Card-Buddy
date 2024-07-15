'use client';
import { useEffect } from 'react';
import LoginHeader from '@/app/components/LoginHeader';
import LoginForm from './components/LoginForm';
import { useDispatch } from 'react-redux';
import { useRouter } from 'next/navigation';

import { setUser } from '@/lib/features/auth/userSlice';
import { getCurrentUser } from '@/app/shared/services/UserServices';
import { getToken, removeToken } from '@/app/shared/utils/Token';
import { verifyToken } from '@/app/shared/services/AuthServices';

const SignIn = () => {
  const router = useRouter();

  useEffect(() => {
    const token = getToken();

    if (!token) {
      return;
    }

    try {
      verifyToken(token).then(() => {
        router.push('/dashboard');
      });
    } catch (error) {
      console.log(error);
      removeToken();
    }
  }, [router]);

  return (
    <>
      <LoginHeader />
      <main>
        <LoginForm />
      </main>
    </>
  );
};

export default SignIn;
