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
      <Stack
        direction="column"
        spacing={6}
        display={"flex"}
        justifyContent="center"
        alignItems="center"
        // paddingTop={"200px"}
      >
        <img src={head} style={{ width: "100%", minWidth: "330px" }} />
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
