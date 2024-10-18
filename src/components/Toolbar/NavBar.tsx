import { AppBar, Box, Button, Stack, Toolbar, useTheme } from "@mui/material";
import ToggleDarkButton from "../Buttons/ToggleDarkButton";
import { Link, useNavigate } from "react-router-dom";
import { useMemo } from "react";

const NavBar = () => {
  const theme = useTheme();
  const navigate = useNavigate();

  const headerImg = require("../../assets/images/WM-July17-Blog-Inline-1200x630-Logo.webp");
  const sfg = useMemo(() => {
    if (theme.palette.mode === "light") {
      return require("../../assets/images/sfg-logo-small-linear.avif");
    } else if (theme.palette.mode === "dark") {
      return require("../../assets/images/sfg-logo-small-linear-palebone.avif");
    }
  }, [theme.palette.mode]);

  const navLibrary = () => {
    navigate("library");
  };

  const navGallery = () => {
    navigate("gallery");
  };
  return (
    <Box sx={{ display: "flex" }}>
      <AppBar position="static">
        <Toolbar variant="dense" sx={{ justifyContent: "center", backgroundColor: "background.toolbar" }}>
          {/* <img src={sfg} height={"80px"} /> */}

          <Stack direction="row">
            <Link to="">
              <img src={headerImg} height={"80px"} />
            </Link>
            <Button onClick={navGallery} variant="text">
              Gallery
            </Button>
            <Button onClick={navLibrary} variant="text">
              Library
            </Button>
          </Stack>
          <span style={{ flexGrow: 1 }} />
          <ToggleDarkButton />
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default NavBar;
