import React, { useState } from 'react';
import { RootState } from '@/lib/store';
import { useRouter } from 'next/navigation';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

type SideBarProps = {
  subpage: string | undefined;
}



const SideBar = ({}: SideBarProps) => {
  const uiSettings = useSelector((state: RootState) => state.uiSettings);
  const dispatch = useDispatch();
  const router = useRouter();

  const [isCollapsed, setIsCollapsed] = useState(uiSettings.isSideBarCollapsed);
  console.log(isCollapsed);
  return (
    <>
      <div className={``}>SideBar</div>
    </>
)}

export default SideBar;