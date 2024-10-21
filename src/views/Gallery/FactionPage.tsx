import { Box, Typography } from "@mui/material";
import { useLoaderData } from "react-router-dom";

const FactionPage = () => {
  const l:any = useLoaderData();
  return (
    <Box
      height={"100%"}
      bgcolor={"background.default"}
      minHeight={"100vh"}
      display={"flex"}
      flexDirection={"column"}
      // alignItems="center"
    >
      <Typography variant="h4">{l.faction}</Typography>
      <Typography variant="body1">This page would contain the basic lore for each Faction and sections for each Army and Cadre. Army and Cadre sections would contain store links.</Typography>
    </Box>
  );
};

export default FactionPage;
