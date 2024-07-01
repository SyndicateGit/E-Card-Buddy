'use client'
import { getCurrentUser } from '@/app/shared/services/UserServices';
import { RootState } from '@/lib/store';
import { useRouter } from 'next/navigation'
import { useSelector } from "react-redux";
import { useDispatch } from 'react-redux';
import { setUser } from '@/lib/features/auth/userSlice';
const Dashboard = () => {
  const user = useSelector((state: RootState) => state.user.user);
  // Redux state doesn't persist
  console.log(user);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Dashboard</h1>
    </main>
  );
}

export default Dashboard;
