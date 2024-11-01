import { useContext } from "react";
import { StarterContext } from "../TutorialDataHandler";
import { Stack, Typography } from "@mui/material";

const RoundOne = () => {
  const { box } = useContext(StarterContext);

  return (
    <Stack direction={"column"} spacing={2}>
      <Typography variant="h5">Round One</Typography>
      <Typography variant="body1">
        Each Round of Warmachine is divided into two player Turns. It's time for
        you to take your first Turn!
      </Typography>
      <Typography variant="h6">Phases</Typography>
      <Typography variant="body1">
        Each Turn is divided into three Phases.
        <ul>
          <li>Maintenance</li>
          <li>Control</li>
          <li>Activation</li>
        </ul>
        There are a number of effects and actions that must be resolved during
        each Phase, which we will cover in greater detail later.
      </Typography>
    </Stack>
  );
};

export default RoundOne;
