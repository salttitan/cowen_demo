import { ButtonProps, TypographyProps } from "@mui/material";

export const getMainTheme = (mode: any) => ({
  palette: {
    mode,
    ...(mode === "dark"
      ? {
          primary: {
            main: "#3f51b5",
          },
          secondary: {
            main: "#f50057",
          },
          //   textPrimary: {
          //     main: "#fff",
          //   },
        }
      : {
          primary: {
            main: "#3f51b5",
          },
          secondary: {
            main: "#f50057",
          },
          //   textPrimary: {
          //     main: "#fff",
          //   },
        }),
  },
  components: {
    mode,
    MuiButton: {
      defaultProps: {
        variant: "text",
        color: "warning",
      } as ButtonProps,
    },
    MuiTypography: {
      defaultProps: {
        color: "textPrimary",
      } as TypographyProps,
    },
    MuiBox: {
      styleOverrides: {
        root: "background.default",
      },
    },
  },
});
