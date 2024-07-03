'use client';
import { useState } from 'react';
import { getCurrentUser } from '@/app/shared/services/UserServices';
import { RootState } from '@/lib/store';
import { useRouter } from 'next/navigation';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { setUser } from '@/lib/features/auth/userSlice';
import Navbar from './components/Navbar';

import SideBar from './components/SideBar/SideBar';

const Dashboard = () => {
  const router = useRouter();
  const user = useSelector((state: RootState) => state.user.user);
  const dispatch = useDispatch();

  const [subpage, setSubpage] = useState<string>('home');

  if (!user._id) {
    getCurrentUser()
      .then((res) => {
        dispatch(setUser(res.data));
      })
      .catch((error) => {
        console.log(error);
        router.push('/');
      });
  }


  return (
    <>
      <div className={'flex flex-col h-screen w-screen'}>
        <div className={'flex w-full'}>
          <div>Toggle SideBar Collapse</div>
          <Navbar />
        </div>
        <div className={'flex'}>
          <SideBar subpage={subpage} />
          <main className="flex flex-col items-center justify-between p-24">
            <h1>Dashboard</h1>
          </main>
        </div>
        
    </div>
    </>
  );
};

export default Dashboard;
