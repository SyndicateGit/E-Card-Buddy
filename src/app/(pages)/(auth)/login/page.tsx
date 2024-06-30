'use client'
import { useEffect } from 'react'
import LoginHeader from '@/app/components/LoginHeader'
import LoginForm from './components/LoginForm'
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/lib/store';
import { useRouter } from 'next/navigation'
import { verifyToken } from '@/app/shared/services/AuthServices';
import { setUserId } from '@/lib/features/auth/userSlice';

const Signup = () => {
  const user = useSelector((state: RootState) => state.user.user);
  const dispatch = useDispatch();
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem('ECardBuddy jwt');
    if(token) {
      try{
        const userId = verifyToken(token);
        dispatch(setUserId(userId));
        router.push('/dashboard');
      } catch (error) {
        console.log(error);
        localStorage.removeItem('ECardBuddy jwt');
      }
    }
  }, []);

  return (
    <>
      <LoginHeader/>
      <main>
        <LoginForm/>
      </main>
    </>
  )
}

export default Signup
