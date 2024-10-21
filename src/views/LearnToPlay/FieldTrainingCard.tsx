import { Card, CardContent, CardMedia, Typography } from "@mui/material";

const FieldTrainingCard = () => {
  const image = require("../../assets/images/Warmachine-Cygnar-ProductShot-2000x2000-Hux.webp");
  return (
    <Card sx={{ width: "100%", display: "flex", height: 300 }}>
      <CardMedia image={image} sx={{ width: "25%" }} />
      <CardContent>
        <Typography variant="h6" color="textPrimary">
          Field Training
        </Typography>
        <Typography variant="body1" color="textPrimary">
          Learn about deployment and movement in this video
        </Typography>
      </CardContent>
    </Card>
  );
};

export default FieldTrainingCard;
