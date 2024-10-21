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
    navigate("World");
  };

  const navGallery = () => {
    navigate("Armies");
  };

  const navResources = () => {
    navigate("Resources");
  };

  const navLearn = () => {
    navigate("Learn");
  };
  return (
    <Box sx={{ display: "flex" }}>
      <AppBar>
        <Toolbar
          sx={{
            justifyContent: "center",
            backgroundColor: "background.toolbar",
          }}
        >
          {/* <img src={sfg} height={"80px"} /> */}

          <Stack direction="row">
            <Link to="">
              <img src={headerImg} height={"80px"} />
            </Link>
            <Button onClick={navLearn}>Learn to Play</Button>
            <Button onClick={navGallery}>Armies</Button>
            <Button onClick={navLibrary}>The World</Button>
            <Button onClick={navResources}>Resources</Button>
          </Stack>
          <span style={{ flexGrow: 1 }} />
          <ToggleDarkButton />
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default NavBar;
