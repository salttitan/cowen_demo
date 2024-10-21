import { Box, Stack, Typography } from "@mui/material";
import TheBasicsCard from "./LearnToPlay/TheBasicsCard";
import FieldTrainingCard from "./LearnToPlay/FieldTrainingCard";
import ArmyPicker from "./LearnToPlay/ArmyPicker";

const LearnToPlay = () => {
  const rightImage = require("../assets/images/Landing_Page_Banner_2000x900_1.webp");
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
        <img src={rightImage} style={{ paddingTop: 5 }} />
        <Typography variant="h3" color="textPrimary">
          Learn to Play
        </Typography>
        <Typography variant="body1">
          Easy to learn but difficult to master, Warmachine offers a wide range
          of gaming and hobby experiences. Here you can find everything you need
          to start your journey.
        </Typography>
        <TheBasicsCard />
        <FieldTrainingCard />
        <ArmyPicker />
      </Stack>
    </Box>
  );
};

export default LearnToPlay;
