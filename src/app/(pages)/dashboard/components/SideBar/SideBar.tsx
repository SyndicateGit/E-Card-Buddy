import React, { useState } from 'react';
import { RootState } from '@/lib/store';
import { useRouter } from 'next/navigation';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import HomeIcon from '@mui/icons-material/Home';
import MenuCard from './MenuCard';

type SideBarProps = {
  subpage: string;
  setSubpage: (subpage: string) => void;
  isCollapsed: boolean;
}



const SideBar = ({subpage, isCollapsed, setSubpage}: SideBarProps) => {

  return (
    <>
      <div className={`flex flex-col ${isCollapsed? 'justify-center': 'justify-start'}`}>
        <MenuCard 
          selected={subpage} 
          title={'Home'} 
          icon={<HomeIcon/>} 
          link={'/dashboard/home'} 
          isCollapsed={isCollapsed}
          setSubpage={setSubpage}
        />
        <MenuCard 
          selected={subpage} 
          title={'Reminder'} 
          icon={<HomeIcon/>} 
          link={'/dashboard/reminder'} 
          isCollapsed={isCollapsed}
          setSubpage={setSubpage}
        />
      </div>
    </>
)}

export default SideBar;