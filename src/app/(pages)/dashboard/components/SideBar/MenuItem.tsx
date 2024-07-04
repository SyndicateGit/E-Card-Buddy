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
  isNestedMenu?: boolean;
  open?: boolean;
  setSubpage: (selected: string) => void;
}

const MenuItem = ({title, icon, selected, isSideBarCollapsed, isNestedMenu, open, setSubpage}: MenuItemProps)=> {
  const handleMenuItemClick = () => {
    if (isNestedMenu) {
      
    }
    setSubpage(title);
  }
  return (
    <>
      <ListItemButton alignItems={`${isSideBarCollapsed? "center": "flex-start"}`} onClick={handleMenuItemClick} selected={title === selected}>
          <ListItemIcon>
            {icon}
          </ListItemIcon>
          {isSideBarCollapsed ? null : <ListItemText primary={title} />}
          {isNestedMenu && (
            open ? <ExpandLess /> : <ExpandMore />
          )}
      </ListItemButton>
    </>
  )
}

export default MenuItem;
