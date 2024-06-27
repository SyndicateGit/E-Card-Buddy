'use client'
import { useEffect } from 'react'
import LoginHeader from '@/app/components/LoginHeader'
import LoginForm from './components/LoginForm'
import axiosInstance from '@/app/shared/services/AxiosInstance';

const Signup = () => {
  useEffect(() => {
    const token = localStorage.getItem('ECardBuddy jwt');
    console.log(token);
    if(token) {
      axiosInstance().get('/auth/verifyToken', {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }).then((response) => {
        console.log(response.data);
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
