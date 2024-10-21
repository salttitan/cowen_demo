import { Card, CardContent, CardMedia, Typography } from "@mui/material";

const ArmyPicker = () => {
  const image = require("../../assets/images/Warmachine-Cygnar-ProductShot-2000x2000-Hux.webp");
  return (
    <Card sx={{ width: "100%", display: "flex", height: 300 }}>
      <CardMedia image={image} sx={{ width: "25%" }} />
      <CardContent>
        <Typography variant="h6" color="textPrimary">
          Choosing your Army
        </Typography>
        <Typography variant="body1" color="textPrimary">
          Learn how each Army plays to find the perfect force to match your playstyle!
        </Typography>
      </CardContent>
    </Card>
  );
};

export default ArmyPicker;
