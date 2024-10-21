import { Box, Typography } from "@mui/material";

const Resources = () => {
  return (
    <Box
      height={"100%"}
      bgcolor={"background.default"}
      minHeight={"100vh"}
      display={"flex"}
      flexDirection={"column"}
      // alignItems="center"
    >
      <Typography variant="h4">Resources</Typography>
      <Typography variant="body1">
        This is a placeholder page. This page would contain download links for
        the app and any PDFs, in addition to a section for Event Organizer
        resources like Steamroller sheets and printable scenario elements.
      </Typography>
    </Box>
  );
};
export default Resources;
