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

import Grid from '@mui/material/Grid';

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
    <Grid container spacing={2}>
      <Grid item xs={2}>
          <div>Toggle SideBar Collapse</div>
      </Grid>
      <Grid item xs={10}>
        <Navbar />
      </Grid>
      <Grid item xs={2}>
        <SideBar subpage={subpage} />
      </Grid>
      <Grid item xs={10}>
        <main className="flex flex-col items-center justify-between p-24">
          <h1>Dashboard</h1>
        </main>
      </Grid>
    </Grid>
    </>
  );
};

export default Dashboard;
