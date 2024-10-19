import { Box, Card, CardContent, CardMedia, Typography } from "@mui/material";

const TheBasicsCard = () => {
  const image = require("../../assets/images/Warmachine-Cygnar-ProductShot-2000x2000-Hux.webp");
  return (
    <Card sx={{ width: "100%", display: "flex" }}>
      <CardMedia image={image} sx={{ width: "25%" }} />
      {/* <Box sx={{ display: "flex", flexDirection: "column" }}> */}
        <CardContent>
          <Typography variant="h6" color="textPrimary">
            The Basics
          </Typography>
        </CardContent>
      {/* </Box> */}
    </Card>
  );
};

export default TheBasicsCard;
