import { useContext } from "react";
import { ColorModeContext } from "../Providers/ColorProvider";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import { IconButton, Tooltip, useTheme } from "@mui/material";

const ToggleDarkButton = () => {
  const theme = useTheme();
  const { toggleMode } = useContext(ColorModeContext);

  const handleClick = () => {
    if (toggleMode) {
      toggleMode();
    }
  };

  return (
    <Tooltip title="Toggle color mode">
      <IconButton onClick={handleClick} color="inherit">
        {theme.palette.mode === "dark" ? (
          <Brightness7Icon />
        ) : (
          <Brightness4Icon />
        )}
      </IconButton>
    </Tooltip>
  );
};

export default ToggleDarkButton;
