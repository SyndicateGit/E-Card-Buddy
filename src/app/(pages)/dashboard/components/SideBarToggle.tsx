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
        <MenuIcon onClick={handleSideBarToggle}/>
      ) : (
        <ChevronLeftIcon onClick={handleSideBarToggle}/>
      )}
    </>
)}

export default SideBarToggle;