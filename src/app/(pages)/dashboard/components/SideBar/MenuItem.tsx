import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
type MenuItemProps = {
  title: string;
  icon: React.ReactNode;
  selected: string;
  isSideBarCollapsed: boolean;
  isNested?: boolean;
  setSubpage: (selected: string) => void;
}

const MenuItem = ({title, icon, selected, isSideBarCollapsed, isNested, setSubpage}: MenuItemProps)=> {
  const handleMenuItemClick = () => {
    setSubpage(title);
  }
  return (
    <>
      <ListItemButton sx={{pl: `${isNested? 1: 0}`, height: "4rem"}} onClick={handleMenuItemClick} selected={title === selected}>
          <ListItemIcon sx={{mr:-1, pl: 1,  }}>
            {icon}
          </ListItemIcon>
          {isSideBarCollapsed ? null : <ListItemText primary={title} />}
      </ListItemButton>
    </>
  )
}

export default MenuItem;
