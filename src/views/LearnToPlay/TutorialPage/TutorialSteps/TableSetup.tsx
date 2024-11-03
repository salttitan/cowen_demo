import { useContext } from "react";
import { StarterContext } from "../TutorialDataHandler";
import { Stack, Typography } from "@mui/material";

const TableSetup = () => {
  const { box } = useContext(StarterContext);
  console.log(box);

  const terrainImage = require("../../../../assets/images/tutorial/setup/terrain.JPG");
  const targetsImage = require("../../../../assets/images/tutorial/setup/targets.JPG");
  const deployImage = require("../../../../assets/images/tutorial/setup/" +
    box?.name +
    ".JPG");

  return (
    <Stack direction="column" spacing={2}>
      <Typography variant="h5">Setting up your table</Typography>
      <Typography variant="body1">
        You'll want to set out a space at least 2 feet by 2 feet. Place your
        terrain templates as shown below:
      </Typography>
      <img src={terrainImage} />
      <Typography variant="body1">
        Next, deploy Target Dummies as shown below:
      </Typography>
      <img src={targetsImage} />
      <Typography variant="body1">
        Next, deploy your force as shown below:
      </Typography>
      <img src={deployImage} />
    </Stack>
  );
};

export default TableSetup;
