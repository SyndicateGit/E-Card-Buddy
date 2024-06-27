'use client';
import React from 'react';
import LoginHeader from './components/LoginHeader';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/lib/store';
import { increment } from '@/lib/features/auth/counterSlice';

const LandingPage = () => {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();
  return (
    <>
      <LoginHeader/>
      <main>
        <span>{count}</span>
        <button onClick={() => dispatch(increment())}>Increment</button>
        <h1>LandingPage</h1>
      </main>
    </>
  )
}

export default LandingPage
