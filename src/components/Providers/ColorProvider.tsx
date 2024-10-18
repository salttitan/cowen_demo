import { ThemeContext } from "@emotion/react";
import {
  createTheme,
  PaletteMode,
  ThemeProvider,
  useMediaQuery,
} from "@mui/material";
import { createContext, useMemo, useState } from "react";
import { getMainTheme } from "../../services/Themes/MainTheme";

interface ThemeCxt {
  mode: string;
  toggleMode?: () => void;
}

let defaultTheme = {
  mode: "light",
};

export const ColorModeContext = createContext<ThemeCxt>(defaultTheme);

export const ColorProvider = (props: any) => {
  const preferDark = useMediaQuery("(prefers-color-scheme: dark)");

  const [mode, setMode] = useState<PaletteMode>("light");

  useMemo(() => {
    if (preferDark) {
      setMode("dark");
    }
  }, [preferDark]);

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
    } else {
      setMode("light");
    }
  };

  const theme = useMemo(() => createTheme(getMainTheme(mode)), [mode]);

  return (
    <ColorModeContext.Provider value={{ mode, toggleMode }}>
      <ThemeProvider theme={theme}>{props.children}</ThemeProvider>
    </ColorModeContext.Provider>
  );
};
