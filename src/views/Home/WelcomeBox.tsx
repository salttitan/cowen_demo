import { Box, Typography } from "@mui/material";

const WelcomeBox = () => {
  return (
    <Box paddingTop={10} width={"100%"}>
      <Typography variant="h4">
        STEP INTO A WORLD FORGED OF IRON AND TEMPERED BY WAR
      </Typography>
      <Typography variant="body1">
        In WARMACHINE, the very earth shakes during fierce confrontations
        between brutal constructs and savage creatures and the powerful heroes
        who command them. Equipped with devastating weapons and arcane might,
        armies set the battlefield ablaze as they forge the fates of their
        unyielding nations in the fires of destruction.
      </Typography>
      <br />
      <Typography variant="body1">
        In the greatest incarnation of the WARMACHINE miniatures game, you will
        take control of an elite warrior mage with a battle group of devastating
        warjacks or warbeasts and a deadly army of soldiers in this fast-paced
        and aggressive 30mm tabletop miniatures game set in the steam-powered
        fantasy world of the Iron Kingdoms.
      </Typography>
    </Box>
  );
};

export default WelcomeBox;
