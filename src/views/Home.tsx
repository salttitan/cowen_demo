import { Box, Paper, Stack, Typography } from "@mui/material";
import WelcomeBox from "./Home/WelcomeBox";
import NewPlayerBox from "./Home/NewPlayerBox";

const Home = () => {
  const head = require("../assets/images/WM-July17-Blog-Inline-1200x630-Logo.webp");
  return (
    <Box
      height={"100%"}
      bgcolor={"background.default"}
      minHeight={"100vh"}
      display={"flex"}
      flexDirection={"column"}
      alignItems="center"
    >
      <Box
        sx={{
          backgroundImage: `url(${head})`,
          backgroundRepeat: "no-repeat",
          width: 1200,
          maxWidth: 2000,
          height: 630,
          display: "flex",
        }}
        marginTop={0}
      >
        <div style={{ height: "100vh" }}></div>
      </Box>
      <Stack
        direction="column"
        spacing={2}
        display={"flex"}
        justifyContent="center"
        alignItems="center"
        // paddingTop={"200px"}
        zIndex={100}
      >
        <Typography variant="h3" color="textPrimary">
          Welcome to the Iron Kingdoms
        </Typography>
        <WelcomeBox />
        <NewPlayerBox />
      </Stack>
    </Box>
  );
};

export default Home;
