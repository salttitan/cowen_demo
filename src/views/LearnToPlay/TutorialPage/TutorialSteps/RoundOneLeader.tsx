import { useContext } from "react";
import { StarterContext } from "../TutorialDataHandler";
import { Stack, Typography } from "@mui/material";

const RoundOneLeader = () => {
  const { box } = useContext(StarterContext);
  const leader = box?.models.leader;

  const spellOneImage = require("../../../../assets/images/tutorial/profiles/" +
    leader?.spells[0].image);
  const spellTwoImage = require("../../../../assets/images/tutorial/profiles/" +
    leader?.spells[1].image);
  return (
    <Stack direction={"column"} spacing={2}>
      <Typography variant="h5">Round One</Typography>
      <Typography variant="h6">Activating {leader?.name}</Typography>
      <Typography variant="body1">
        {leader?.type}s are the key to your force; powerful battle mages who use
        martial prowess and powerful magic to enhance their allies and slay
        their enemies.
      </Typography>
      <Typography variant="body1">
        {leader?.type}s have access to a selection of powerful Spells that they
        can spend {box?.resource} to cast during their Activation. Spells can be
        cast at any time as long as they don't interrupt another action, meaning
        that {leader?.name} can cast spells before they move, after they move,
        or between attacks but they cannot stop their movement to cast a spell
        and then continue nor cast a spell after beginning an attack. We'll
        start their activation by casting a spell to enhance another model in
        your force.
      </Typography>
      <Typography variant="body1">
        Lets take a look at the spell {leader?.spells[0].name}. Don't worry
        about all of the effects and values listed, we'll go through them as
        they come up.
      </Typography>
      <img src={spellOneImage}></img>
      <Typography variant="body1">{leader?.spells[0].desc}</Typography>
      <Typography variant="body1">
        To cast {leader?.spells[0].name}, {leader?.name} will need to spend the
        Spell's COST in {box?.resource}. Remove {leader?.spells[0].cost}{" "}
        {box?.resource} from {leader?.name} when you declare you are casting the
        Spell.
      </Typography>
      <Typography variant="body1">
        All Spells require a Target. Since {leader?.spells[0].name} is not an
        Offensive Spell, as indicated by "Off: No" on it's entry, the Target
        must be a Friendly model. Target {box?.models.cohort.name} with{" "}
        {leader?.spells[0].name} and check that they are within the Spell's RNG
        of {leader?.spells[0].rng} inches.
      </Typography>
      <Typography variant="body1">
        {box?.models.cohort.name} is within range, so place a token on it to
        indicate that it is under the effect of {leader?.spells[0].name}
      </Typography>
    </Stack>
  );
};

export default RoundOneLeader;
