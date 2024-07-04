import MenuItem from '@mui/material/MenuItem';
import { useRouter } from 'next/navigation';
type MenuCardProps = {
  title: string;
  icon: React.ReactNode;
  selected: string;
  isCollapsed: boolean;
  setSubpage: (selected: string) => void;
}

const MenuCard = ({title, icon, selected, isCollapsed, setSubpage}: MenuCardProps)=> {
  const router = useRouter();
  const handleMenuItemClick = () => {
    setSubpage(title);
  }
  return (
    <>
      <MenuItem className='flex flex-1' selected={selected === title} onClick={handleMenuItemClick}>
        <div className={`flex flex-1 ${isCollapsed? 'justify-center' : 'justify-start' }`}>
          {icon}
          <p className={`${isCollapsed ? 'hidden': 'block'} ml-2 self-end`}>
            {title}
          </p>
        </div>
      </MenuItem>
    </>
  )
}

export default MenuCard;
