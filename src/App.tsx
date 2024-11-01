import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { ColorProvider } from "./components/Providers/ColorProvider";
import { Outlet, ScrollRestoration } from "react-router-dom";
import NavBar from "./components/Toolbar/NavBar";
import { Box, Toolbar } from "@mui/material";
import BreadcrumbBar from "./components/Toolbar/BreadcrumbBar";

function App() {
  return (
    <ColorProvider>
      <NavBar />
      <Toolbar sx={{ height: 84 }} />
      <BreadcrumbBar />
      <Box
        paddingLeft={{xs:1, md:15}}
        paddingRight={{xs:1  , md:15}}
        paddingBottom={{xs:1, md:10}}
        bgcolor={"background.default"}
      >
        <Outlet />
        <ScrollRestoration />
      </Box>
    </ColorProvider>
  );
}

export default App;
