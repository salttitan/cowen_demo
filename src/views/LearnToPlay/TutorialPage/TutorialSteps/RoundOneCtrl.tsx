import { Stack, Typography } from "@mui/material";
import { useContext, useMemo } from "react";
import { StarterContext } from "../TutorialDataHandler";

const RoundOneCtrl = () => {
  const { box } = useContext(StarterContext);

  const controlSteps = useMemo(() => {
    if (box !== null) {
      switch (box.resource) {
        case "Focus":
          return (
            <ol>
              <li>
                Warcasters regain Focus: Place {box.models.leader.arc} Focus
                tokens next to {box.models.leader.name}.
              </li>

              <li>
                Warjacks Power Up: Place 1 Focus token next to{" "}
                {box.models.cohort.name}
              </li>
              <li>
                Warcasters can allocate Focus to Warjacks in their Battlegroup:
                Remove 1 Focus token from {box.models.leader.name} and place it
                next to {box.models.cohort.name}.
              </li>
            </ol>
          );
        case "Fury":
          return (
            <ol>
              <li>
                Warlocks Leech Fury: This only happens after round one, for now
                place {box.models.leader.arc} Fury tokens next to{" "}
                {box.models.leader.name}.
              </li>
              <li>
                We will cover more steps of the Control Phase on Round 2.
              </li>
            </ol>
          );
      }
    }
  }, [box]);

  return (
    <Stack direction="column" spacing={2}>
      <Typography variant="h5">Round One</Typography>
      <Typography variant="h6">Control Phase</Typography>
      <Typography variant="body1">
        During the Control Phase your {box?.models.leader.type} will manage
        their {box?.resource} and prepare for the next turn.
      </Typography>
      <Typography variant="body1" component={"div"}>{controlSteps}</Typography>
      <Typography variant="body1">Now we move on to the Activation Phase!</Typography>
    </Stack>
  );
};

export default RoundOneCtrl;
