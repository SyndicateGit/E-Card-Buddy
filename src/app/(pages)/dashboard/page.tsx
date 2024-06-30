'use client'
import { RootState } from '@/lib/store';
import { useSelector } from "react-redux";

const Dashboard = () => {
  const user = useSelector((state: RootState) => state.user.user);
  console.log(user);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Dashboard</h1>
    </main>
  );
}

export default Dashboard;
