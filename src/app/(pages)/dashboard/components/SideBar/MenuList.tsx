import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
type MenuListProps = {
  title: string;
  icon: React.ReactNode;
  isSideBarCollapsed: boolean;
  open: boolean;
  setSubpageOpen: (open: boolean) => void;
}

const MenuList = ({title, icon, isSideBarCollapsed, open, setSubpageOpen}: MenuListProps)=> {
  const handleMenuListClick = () => {
    setSubpageOpen(!open);
  }
  return (
    <>
      <ListItemButton sx={{pl: 1}} onClick={handleMenuListClick}>
          <ListItemIcon sx={{mr:-1, pl: 1 }}>
            {icon}
          </ListItemIcon>
          {isSideBarCollapsed ? null : <ListItemText primary={title} />}
          {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
    </>
  )
}

export default MenuList;
