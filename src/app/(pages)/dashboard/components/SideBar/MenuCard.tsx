import MenuItem from '@mui/material/MenuItem';
import { useRouter } from 'next/navigation';
type MenuCardProps = {
  title: string;
  icon: React.ReactNode;
  link: string;
  selected: string;
  isCollapsed: boolean;
  setSubpage: (selected: string) => void;
}

const MenuCard = ({title, icon, link, selected, isCollapsed, setSubpage}: MenuCardProps)=> {
  const router = useRouter();
  const handleMenuItemClick = () => {
    setSubpage(title);
  }
  return (
    <>
      <MenuItem className='flex flex-1' selected={selected === title} onClick={handleMenuItemClick}>
        <div>
          {icon}
        </div>
        <p className={`${isCollapsed ? 'hidden': 'block'} ml-2`}>
          {title}
        </p>
      </MenuItem>
    </>
  )
}

export default MenuCard;
