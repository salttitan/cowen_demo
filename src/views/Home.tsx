import { Box, Stack, Typography } from "@mui/material";
import WelcomeBox from "./Home/WelcomeBox";

const Home = () => {
  const head = require("../assets/images/Landing_Page_Banner_2000x900_1.webp");
  return (
    <Box height={"100%"} bgcolor={"background.default"}>
      <Stack
        direction="column"
        spacing={2}
        display={"flex"}
        justifyContent="center"
        alignItems="center"
      >
        <Typography variant="h3" color="textPrimary">
          Welcome to the Iron Kingdoms
        </Typography>
        <Box
          sx={{
            backgroundImage: `url(${head})`,
            width: "100%",
            maxWidth: 2000,
            height: 900,
            display: "flex",
          }}
        />
        <WelcomeBox />
      </Stack>
    </Box>
  );
};

export default Home;
