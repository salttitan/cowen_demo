import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

const TheBasicsCard = () => {
  const image = require("../../assets/images/WM-Blog-Inline-1200x900-DeuceWarjack_1.webp");
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("Training");
  };

  return (
    <CardActionArea onClick={handleClick}>
      <Card sx={{ width: "100%", display: "flex", height: 300 }}>
        <CardMedia image={image} sx={{ width: "25%" }} />
        <CardContent>
          <Typography variant="h6" color="textPrimary">
            Training Field
          </Typography>
          <Typography variant="body1" color="textPrimary">
            If this is your first time playing a tabletop wargame check out this
            step-by-step guide that walks you through all the basics of
            Warmachine gameplay.
          </Typography>
        </CardContent>
      </Card>{" "}
    </CardActionArea>
  );
};

export default TheBasicsCard;
