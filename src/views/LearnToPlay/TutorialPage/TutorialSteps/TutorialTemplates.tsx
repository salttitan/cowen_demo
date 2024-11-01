import { Stack, Typography } from "@mui/material";

const TutorialTemplates = () => {
  return (
    <Stack direction={"column"} spacing={2}>
      <Typography variant="h5">Other materials</Typography>
      <Typography variant="body1">
        <ul>
          <li>4 six-sided dice</li>
          <li>a tape measurer or ruler</li>
          <li>Terrain and token templates (Download Link)</li>
        </ul>
      </Typography>
    </Stack>
  );
};

export default TutorialTemplates;
