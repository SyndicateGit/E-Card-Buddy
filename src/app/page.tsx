'use client';
import React, { useEffect } from 'react';
import LoginHeader from './components/LoginHeader';
import axiosInstance from '@/app/shared/services/AxiosInstance';

const LandingPage = () => {
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
        <h1>LandingPage</h1>
      </main>
    </>
  )
}

export default LandingPage
