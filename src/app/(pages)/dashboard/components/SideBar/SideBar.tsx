import React, { useState } from 'react';
import { RootState } from '@/lib/store';
import { useRouter } from 'next/navigation';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import MenuItem from './MenuItem';
import List from '@mui/material/List';
import Collapse from '@mui/material/Collapse';
import MenuList from './MenuList';
import { ClockClockwise, User, House, Image, EnvelopeSimple, Cards, FilePlus } from "@phosphor-icons/react/dist/ssr";

type SideBarProps = {
  subpage: string;
  setSubpage: (subpage: string) => void;
  isSideBarCollapsed: boolean;
}



const SideBar = ({subpage, isSideBarCollapsed, setSubpage}: SideBarProps) => {
  const [cardsSubpageOpen, setCardsSubpageOpen] = useState(false);

  return (
    <>
      <div className={`flex flex-col ${isSideBarCollapsed? 'justify-center': 'justify-start'}`}>
        <MenuItem 
          title={'Home'} 
          icon={<House size={24} color={"black"}/>} 
          isSideBarCollapsed= {isSideBarCollapsed} 
          selected={subpage} 
          setSubpage={setSubpage}/>
        <MenuList 
          title={'Cards'} 
          icon={<Image size={24} color={"black"}/>} 
          isSideBarCollapsed={isSideBarCollapsed}
          open={cardsSubpageOpen}
          setSubpageOpen={setCardsSubpageOpen}
        />
        <Collapse in={cardsSubpageOpen} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <MenuItem  
              selected={subpage} 
              title={'Card Library'} 
              icon={<Cards size={24} color={"black"}/>} 
              isSideBarCollapsed={isSideBarCollapsed}
              setSubpage={setSubpage}
              isNested={true}
            />
            <MenuItem  
              selected={subpage} 
              title={'Card Builder'} 
              icon={<FilePlus size={24} color={"black"}/>} 
              isSideBarCollapsed={isSideBarCollapsed}
              setSubpage={setSubpage}
              isNested={true}
            />
            <MenuItem  
              selected={subpage} 
              title={'Card Scheduler'} 
              icon={<EnvelopeSimple size={24} color={"black"}/>} 
              isSideBarCollapsed={isSideBarCollapsed}
              setSubpage={setSubpage}
              isNested={true}
            />
          </List>
        </Collapse>
        <MenuItem 
          title={'Reminders'} 
          icon={<ClockClockwise size={24} color={"black"}/>} 
          isSideBarCollapsed= {isSideBarCollapsed} 
          selected={subpage} 
          setSubpage={setSubpage}
        />
        <MenuItem 
          title={'Contacts'} 
          icon={<User size={24} color={"black"}/>} 
          isSideBarCollapsed= {isSideBarCollapsed} 
          selected={subpage} 
          setSubpage={setSubpage}
        />
      </div>
    </>
)}

export default SideBar;