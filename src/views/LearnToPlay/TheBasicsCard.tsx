import { Card, CardContent, CardMedia, Typography } from "@mui/material";

const TheBasicsCard = () => {
  const image = require("../../assets/images/WM-Blog-Inline-1200x900-DeuceWarjack_1.webp");
  return (
    <Card sx={{ width: "100%", display: "flex", height: 300 }}>
      <CardMedia image={image} sx={{ width: "25%" }} />
      <CardContent>
        <Typography variant="h6" color="textPrimary">
          The Basics
        </Typography>
        <Typography variant="body1" color="textPrimary">
          Learn the basics of list building and model types in this video
        </Typography>
      </CardContent>
    </Card>
  );
};

export default TheBasicsCard;
