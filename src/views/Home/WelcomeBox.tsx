import { Box, Grid2, Typography } from "@mui/material";

const WelcomeBox = () => {
  return (
    <Box paddingLeft={"20px"}>
      <Grid2 container>
        <Grid2 size={{ xs: 0, md: 3 }} />
        <Grid2 size={6}>
          <Typography variant="h4">
            STEP INTO A WORLD FORGED OF IRON AND TEMPERED BY WAR
          </Typography>
          <Typography variant="body1">
            <p>
              {" "}
              In WARMACHINE, the very earth shakes during fierce confrontations
              between brutal constructs and savage creatures and the powerful
              heroes who command them. Equipped with devastating weapons and
              arcane might, armies set the battlefield ablaze as they forge the
              fates of their unyielding nations in the fires of destruction.{" "}
            </p>
            <p>
              In the greatest incarnation of the WARMACHINE miniatures game, you
              will take control of an elite warrior mage with a battle group of
              devastating warjacks or warbeasts and a deadly army of soldiers in
              this fast-paced and aggressive 30mm tabletop miniatures game set
              in the steam-powered fantasy world of the Iron Kingdoms.
            </p>
          </Typography>
        </Grid2>
        <Grid2 size={{ xs: 0, md: 3 }} />
      </Grid2>
    </Box>
  );
};

export default WelcomeBox;
