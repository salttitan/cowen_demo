import {
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
} from "@mui/material";
import { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import { useNavigate } from "react-router-dom";

const MobileNavMenu = () => {
  const [open, setOpen] = useState<boolean>(false);
  const navigate = useNavigate();

  const toggleDrawer = () => {
    setOpen(!open);
  };

  const navLibrary = () => {
    navigate("World");
    toggleDrawer();
  };

  const navGallery = () => {
    navigate("Armies");
    toggleDrawer();
  };

  const navResources = () => {
    navigate("Resources");
    toggleDrawer();
  };

  const navLearn = () => {
    navigate("Learn");
    toggleDrawer();
  };

  return (
    <div>
      <IconButton
        edge="start"
        onClick={toggleDrawer}
        sx={{ display: { xs: "flex", md: "none" } }}
      >
        <MenuIcon />
      </IconButton>
      <Drawer anchor={"left"} open={open} onClose={toggleDrawer}>
        <List>
          <ListItem disablePadding>
            <ListItemButton onClick={navLearn}>Learn to Play</ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton onClick={navGallery}>Armies</ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton onClick={navLibrary}>The World</ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton onClick={navResources}>Resources</ListItemButton>
          </ListItem>
        </List>
      </Drawer>
    </div>
  );
};

export default MobileNavMenu;
