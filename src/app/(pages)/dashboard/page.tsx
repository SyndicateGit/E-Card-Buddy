'use client'
import { getCurrentUser } from '@/app/shared/services/UserServices';
import { RootState } from '@/lib/store';
import { useRouter } from 'next/navigation'
import { useSelector } from "react-redux";
import { useDispatch } from 'react-redux';
import { setUser } from '@/lib/features/auth/userSlice';
import DashboardHeader from './components/DashboardHeader';
const Dashboard = () => {
  const router = useRouter();
  const user = useSelector((state: RootState) => state.user.user);
  const dispatch = useDispatch();

  if(!user._id){
    getCurrentUser().then((res) => {
      dispatch(setUser(res.data));
    }).catch((error) => {
      console.log(error);
      router.push('/');
    });
  }

  return (
    <>
      <DashboardHeader/>
      <main className="flex flex-col items-center justify-between p-24">
        <h1>Dashboard</h1>
      </main>
    </>
  );
}

export default Dashboard;
