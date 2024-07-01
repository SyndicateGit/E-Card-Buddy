'use client'
import { useEffect } from 'react'
import LoginHeader from '@/app/components/LoginHeader'
import LoginForm from './components/LoginForm'
import { useDispatch } from 'react-redux';
import { useRouter } from 'next/navigation'

import { setUser } from '@/lib/features/auth/userSlice';
import { getCurrentUser } from '@/app/shared/services/UserServices';

const Signup = () => {
  const dispatch = useDispatch();
  const router = useRouter();

  useEffect(() => {
    const storeUser = async() => {
      dispatch(setUser(await getCurrentUser()));
    }
    
    try{
      storeUser();
      router.push('/dashboard');
    } catch (error) {
      console.log(error);
      localStorage.removeItem('ECardBuddy jwt');
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
