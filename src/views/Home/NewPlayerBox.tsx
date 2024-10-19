import { Button, CardMedia, Grid2, Typography } from "@mui/material";
import QuickLaunchCard from "../../components/Cards/QuickLaunchCard";

const NewPlayerBox = () => {
  const rightImage = require("../../assets/images/Landing_Page_Banner_2000x900_1.webp");
  const learnImage = require("../../assets/images/ansonflipped.jpeg");
  const armiesImage = require("../../assets/images/WM-Blog-Inline-1200x900-DeuceWarjack_1.webp");
  const worldImage = require("../../assets/images/IKRPG_MKIII_MAP_4_21.png");
  const resourcesImage = require("../../assets/images/WM-Wednesday-App-1200x1000-newlogo_1_ca8283c4-0a60-434e-99f5-1960a0ac12cb.webp");

  return (
    <Grid2 container spacing={2}>
      <Grid2 size={{ xs: 12, md: 6 }}>
        <Typography variant="h6">What is Warmachine?</Typography>
        <Typography variant="body2">
          Warmachine is a fast-paced 30mm tabletop wargame where powerful battle
          mages lead forc
        </Typography>
      </Grid2>
      <Grid2 size={{ xs: 12, md: 6 }}>
        <img src={rightImage} width="800px" />
      </Grid2>
      <Grid2 size={{ xs: 12, md: 6, lg: 3 }}>
        <QuickLaunchCard
          title={"Getting Started"}
          image={learnImage}
          target={"learn"}
        ></QuickLaunchCard>
      </Grid2>
      <Grid2 size={{ xs: 12, md: 6, lg: 3 }}>
        <QuickLaunchCard
          title={"Armies of Warmachine"}
          image={armiesImage}
          target={"armies"}
        />
      </Grid2>
      <Grid2 size={{ xs: 12, md: 6, lg: 3 }}>
        <QuickLaunchCard
          title={"The World of Immoren"}
          image={worldImage}
          target={"world"}
        />
      </Grid2>
      <Grid2 size={{ xs: 12, md: 6, lg: 3 }}>
        <QuickLaunchCard
          title={"Resources"}
          image={resourcesImage}
          target={"resources"}
        />
      </Grid2>
    </Grid2>
  );
};

export default NewPlayerBox;
