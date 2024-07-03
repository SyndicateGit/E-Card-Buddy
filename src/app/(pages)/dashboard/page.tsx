'use client';
import { useState, useEffect } from 'react';
import { getCurrentUser } from '@/app/shared/services/UserServices';
import { RootState } from '@/lib/store';
import { useRouter } from 'next/navigation';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { setUser } from '@/lib/features/auth/userSlice';
import Navbar from './components/Navbar';
import SideBar from './components/SideBar/SideBar';

import Grid from '@mui/material/Grid';
import SideBarToggle from './components/SideBarToggle';

const Dashboard = () => {
  const router = useRouter();
  const uiSettings = useSelector((state: RootState) => state.uiSettings);
  const user = useSelector((state: RootState) => state.user.user);
  const dispatch = useDispatch();
  const [subpage, setSubpage] = useState<string>('home');
  const sideBarWidth = uiSettings.isSideBarCollapsed ? 0.5 : 1;
  if (!user || !user._id) {
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
    <Grid container spacing={0}>
      <Grid item xs={sideBarWidth}>
          <SideBarToggle isCollapsed={uiSettings.isSideBarCollapsed}/>
      </Grid>
      <Grid item xs={12 - sideBarWidth}>
        <Navbar />
      </Grid>
      <Grid item xs={sideBarWidth}>
        <SideBar subpage={subpage} />
      </Grid>
      <Grid item xs={12 - sideBarWidth}>
        <main className="flex flex-col items-center justify-between p-24">
          <h1>Dashboard</h1>
        </main>
      </Grid>
    </Grid>
    </>
  );
};

export default Dashboard;
