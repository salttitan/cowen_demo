import { useContext } from "react";
import { StarterContext } from "../TutorialDataHandler";
import { Stack, Typography } from "@mui/material";

const RoundOneLeaderMove = () => {
  const { box } = useContext(StarterContext);
  const leader = box?.models.leader;

  // const image = require("../../../../assets/images/tutorial/movement/" +
  //   leader?.name +
  //   "-advance.JPG");

  const image = require("../../../../assets/images/tutorial/movement/Wraithbinder Nekane-advance.JPG");

  return (
    <Stack direction={"column"} spacing={2}>
      <Typography variant="h5">Round One</Typography>
      <Typography variant="h6">Activating {leader?.name}</Typography>
      <Typography variant="body1">
        Next we're going to move {leader?.name} up the field so they can engage
        the enemy.
      </Typography>
      <Typography variant="body1">
        {leader?.name} is going to make a Full Advance towards the target
        dummies using their SPD of {leader?.spd}. Using your measuring device
        measure {leader?.spd} inches from the front edge of {leader?.name}s base
        and place them with the same edge of the base at the {leader?.spd} mark.{" "}
        <b>
          Remember, always measure any distances from the front edge of the
          model's base
        </b>
      </Typography>
      <img src={image} />
      <Typography variant="body1">
        {leader?.name}s movement is now complete.
      </Typography>
    </Stack>
  );
};

export default RoundOneLeaderMove;
