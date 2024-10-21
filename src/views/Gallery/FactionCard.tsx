import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Collapse,
  IconButton,
  Typography,
} from "@mui/material";
import { useState } from "react";

import CloseIcon from "@mui/icons-material/Close";
import { useNavigate } from "react-router-dom";

const FactionCard = (props: any) => {
  const image = require(`../../assets/images/${props.faction.image}`);
  const [open, setOpen] = useState<boolean>(false);
  const navigate = useNavigate();

  const onNav = () => {
    navigate(`${props.faction.name}`);
  };

  const onClick = () => {
    setOpen(true);
  };
  return (
    <Card sx={{ height: 325 }}>
      <Collapse in={!open}>
        <CardActionArea onClick={onClick}>
          <CardMedia image={image} sx={{ height: 256 }} />
          <CardHeader title={props.faction.name} />
        </CardActionArea>
      </Collapse>
      <Collapse in={open}>
        <CardHeader
          title={props.faction.name}
          action={
            <IconButton onClick={() => setOpen(false)}>
              <CloseIcon />
            </IconButton>
          }
        />
        <CardContent>
          <Typography variant="body1">
           {props.faction.description}
          </Typography>
        </CardContent>
        <CardActions>
          <Button onClick={onNav} variant="contained" color="primary">
            Learn More
          </Button>
        </CardActions>
      </Collapse>
    </Card>
  );
};

export default FactionCard;
