import { useContext, useMemo } from "react";
import { StarterContext } from "../TutorialDataHandler";
import { Stack, Typography } from "@mui/material";

const RoundOneLeaderAttack = () => {
  const { box } = useContext(StarterContext);

  const leader = box?.models.leader;
  const image = require("../../../../assets/images/tutorial/profiles/" +
    leader?.rangedWeapon?.image);

  const rangeCheck = require("../../../../assets/images/tutorial/movement/" +
    leader?.name +
    "-range.JPG");

  const hitdiff = useMemo(() => {
    if (box !== null) {
      if (box.models.leader.rangedWeapon) {
        return 12 - box.models.leader.rangedWeapon.rat;
      }
    }
    return 0;
  }, [box]);

  const damdiff = useMemo(() => {
    if (box !== null) {
      if (box.models.leader.rangedWeapon) {
        return box.models.leader.rangedWeapon.pow - 13;
      }
    }
    return 0;
  }, [box]);

  return (
    <Stack direction="column" spacing={2}>
      <Typography variant="h5">Round One</Typography>
      <Typography variant="h6">Attacking with {leader?.name}</Typography>
      <Typography variant="body1">
        {leader?.type} carry a variety of ranged and melee weapons that they can
        use to attack their enemies. Lets attack the first Target Dummy with
        their {leader?.rangedWeapon?.name}.
      </Typography>
      <img src={image} />
      <Typography variant="body1">
        First you'll want to make sure your target is in range.{" "}
        {leader?.rangedWeapon?.name} has a RNG of {leader?.rangedWeapon?.rng},
        so measure from the edge of {leader?.name}s base to the nearest edge of
        Target Dummy 1's base to check the range.
      </Typography>
      <img src={rangeCheck} />
      <Typography variant="body1">
        Since we are in range it's time to make an Attack Roll. To do that
        you'll need to compare the weapon's RAT stat plus a die roll to the
        target's DEF stat.
      </Typography>
      <Typography variant="body1">
        The {leader?.rangedWeapon?.name} has a RAT of{" "}
        {leader?.rangedWeapon?.rat} and the Target Dummy has a DEF of 12. Roll 2
        dice and add their total result to your RAT. If the new total equals or
        exceeds a 12 then the attack hits!{" "}
      </Typography>
      <Typography variant="body1">
        <i>
          Hint: One trick some players use make this faster is to first note the
          difference between the RAT and DEF values. This will be the result you
          want to see on the dice in order to hit. The difference between{" "}
          {leader?.rangedWeapon?.rat} and 12 is {hitdiff}, so any result of{" "}
          {hitdiff} or higher will be a hit.
        </i>
      </Typography>
      <Typography variant="body1">
        Now that the attack has hit you will determine if it deals any damage.
        To do this you'll roll two more dice and add them to the{" "}
        {leader?.rangedWeapon?.name}s POW stat, then subtract the Target Dummy's
        ARM stat.
      </Typography>
      <Typography variant="body1">
        The {leader?.rangedWeapon?.name} has a POW of{" "}
        {leader?.rangedWeapon?.pow} and the Target Dummy has an ARM of 13. Roll
        2 dice and add their total result to your POW. If the new total equals
        or exceeds a 15 you will deal one point of damage for every point the
        damage roll exceeds 13.
      </Typography>
      <Typography variant="body1">
        <i>
          Hint: One trick some players use make this faster is to first note the
          difference between the POW and ARM values. Adding or subtracting this
          to the results of your damage roll is a quick way to determine the
          amount of damage you deal. For example with a POW of{" "}
          {leader?.rangedWeapon?.pow} and an ARM of 13 the difference is{" "}
          {damdiff}, so the damage you deal will be total of the dice roll plus{" "}
          {damdiff}.
        </i>
      </Typography>
      <Typography variant="body1">
        You've successfully damage Target Dummy One. Take the damage you dealt
        and mark that number of damage boxes on it's damage track, starting on
        the left.
      </Typography>
      <Typography variant="body1">
        With that, {leader?.name}s activation is complete. Next we'll activate{" "}
        {box?.models.cohort.name}.
      </Typography>
    </Stack>
  );
};

export default RoundOneLeaderAttack;
