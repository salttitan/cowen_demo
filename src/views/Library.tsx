import { Box, Typography } from "@mui/material";

const Library = () => {
  return (
    <Box
      height={"100%"}
      bgcolor={"background.default"}
      minHeight={"100vh"}
      display={"flex"}
      flexDirection={"column"}
      // alignItems="center"
    >
      <Typography variant="h4">The world of the Iron Kingdoms</Typography>
      <Typography variant="body1">
        This is a placeholder page. This page would contain basic information
        about the setting, the factions/armies, and introductory fiction.{" "}
      </Typography>
    </Box>
  );
};

export default Library;
