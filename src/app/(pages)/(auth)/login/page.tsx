'use client'
import { useEffect } from 'react'
import LoginHeader from '@/app/components/LoginHeader'
import LoginForm from './components/LoginForm'
import axiosInstance from '@/app/shared/services/AxiosInstance';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/lib/store';
import { useRouter } from 'next/navigation'

const Signup = () => {
  const user = useSelector((state: RootState) => state.user.user);
  const dispatch = useDispatch();
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem('ECardBuddy jwt');
    console.log(token);
    if(token) {
      axiosInstance().get('/auth/verifyToken', {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }).then((response) => {
        const user = response.data.data.user;
        dispatch({ type: 'user/setUser', payload: {...user, id: user._id} });
        router.push('/dashboard');
      }).catch((error) => {
        console.log(error);
      });
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
