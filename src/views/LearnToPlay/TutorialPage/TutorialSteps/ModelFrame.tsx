import { Paper, Typography } from "@mui/material";

const ModelFrame = (props: any) => {
    
  const image = require("../../../../assets/images/tutorial/portraits/" +
    props.data.image);

  return (
    <Paper>
      <Typography variant="h6">
        {props.data.type}: {props.data.name}
      </Typography>
      <img src={image} />
    </Paper>
  );
};

export default ModelFrame;