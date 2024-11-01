import { Stack, Typography } from "@mui/material";
import { useContext } from "react";
import { StarterContext } from "../TutorialDataHandler";

const RoundOneAct = () => {
  const { box } = useContext(StarterContext);

  return (
    <Stack direction="column" spacing={2}>
      <Typography variant="h5">Round One</Typography>
      <Typography variant="h6">Activation Phase</Typography>
      <Typography variant="body1">
        During the Activation Phase each model in your force performs their
        Activation one at a time before moving on to the next model. We'll start
        with your {box?.models.leader.type}, {box?.models.leader.name}.
      </Typography>
    </Stack>
  );
};

export default RoundOneAct;
