import React, { useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import { useDispatch } from 'react-redux';
import { toggleSideBarCollapsed } from '@/lib/features/auth/uiSettingsSlice';

type SideBarToggleProps = {
  isCollapsed: boolean;
}


const SideBarToggle = ({isCollapsed}: SideBarToggleProps) => {
  const dispatch = useDispatch();
  const handleSideBarToggle = () => {
    dispatch(toggleSideBarCollapsed());
  }
  return (
    <>
      
        {isCollapsed ? (
          <div className='flex justify-center items-center h-full'>
            <MenuIcon onClick={handleSideBarToggle}/>
          </div>
        ) : (
          <div className='flex justify-end items-center h-full pr-2'>
            <ChevronLeftIcon onClick={handleSideBarToggle}/>
          </div>
        )}
    </>
)}

export default SideBarToggle;