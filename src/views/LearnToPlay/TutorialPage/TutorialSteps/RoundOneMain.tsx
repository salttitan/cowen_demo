import { Stack, Typography } from "@mui/material";

const RoundOneMain = () => {
  return (
    <Stack direction="column" spacing="2">
      <Typography variant="h5">Round One</Typography>
      <Typography variant="h6">Maintenance Phase</Typography>
      <Typography variant="body1">
        During the first round of the game there are no effects to resolve in
        the Maintenance phase, so we can proceed to the Control Phase.
      </Typography>
    </Stack>
  );
};

export default RoundOneMain;
