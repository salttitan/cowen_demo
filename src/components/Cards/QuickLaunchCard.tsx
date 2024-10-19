import {
  Card,
  CardActionArea,
  CardContent,
  CardHeader,
  CardMedia,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

const QuickLaunchCard = (props: any) => {
  const navigate = useNavigate();
  const onClick = () => {
    navigate(props.target);
  };
  return (
    <Card>
      <CardActionArea onClick={onClick}>
        <CardMedia image={props.image} sx={{ height: 200 }} />
        <CardContent>{props.children}</CardContent>
        <CardHeader title={props.title} />
      </CardActionArea>
    </Card>
  );
};

export default QuickLaunchCard;
