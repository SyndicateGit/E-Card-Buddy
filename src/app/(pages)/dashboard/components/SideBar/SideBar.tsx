import React, { useState } from 'react';
import { RootState } from '@/lib/store';
import { useRouter } from 'next/navigation';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import HomeIcon from '@mui/icons-material/Home';
import MenuCard from './MenuCard';
import MenuItem from './MenuItem';
import List from '@mui/material/List';
import Collapse from '@mui/material/Collapse';

type SideBarProps = {
  subpage: string;
  setSubpage: (subpage: string) => void;
  isSideBarCollapsed: boolean;
}



const SideBar = ({subpage, isSideBarCollapsed, setSubpage}: SideBarProps) => {

  return (
    <>
      <div className={`flex flex-col ${isSideBarCollapsed? 'justify-center': 'justify-start'}`}>
        <MenuItem 
          title={'Home'} 
          icon={<HomeIcon/>} 
          isSideBarCollapsed= {isSideBarCollapsed} 
          selected={subpage} 
          setSubpage={setSubpage}/>
        <MenuItem 
          selected={subpage} 
          title={'Cards'} 
          icon={<HomeIcon/>} 
          isSideBarCollapsed={isSideBarCollapsed}
          setSubpage={setSubpage}
          isNestedMenu={true}
          open={subpage === 'Cards'}
        />
        <Collapse in={subpage === 'Cards'} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <MenuItem  
              selected={subpage} 
              title={'Card Builder'} 
              icon={<HomeIcon/>} 
              isSideBarCollapsed={isSideBarCollapsed}
              setSubpage={setSubpage}
            />
            <MenuItem  
              selected={subpage} 
              title={'Card Scheduler'} 
              icon={<HomeIcon/>} 
              isSideBarCollapsed={isSideBarCollapsed}
              setSubpage={setSubpage}
            />
          </List>
        </Collapse>
        
      </div>
    </>
)}

export default SideBar;