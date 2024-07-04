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
  isNestedItem?: boolean;
  open?: boolean;
  setCardsSubpageOpen?: (open: boolean) => void;
  setSubpage: (selected: string) => void;
}

const MenuItem = ({title, icon, selected, isSideBarCollapsed, isNestedMenu, isNestedItem, open, setCardsSubpageOpen, setSubpage}: MenuItemProps)=> {
  const handleMenuItemClick = () => {
    if (isNestedMenu && setCardsSubpageOpen) {
      setCardsSubpageOpen(!open);
    }
    setSubpage(title);
  }
  return (
    <>
      <ListItemButton sx={{pl: `${isNestedItem? 1: 0}`}} onClick={handleMenuItemClick} selected={title === selected}>
          <ListItemIcon sx={{ mr: -3 }}>
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
