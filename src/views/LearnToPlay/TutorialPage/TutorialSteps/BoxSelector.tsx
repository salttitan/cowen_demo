import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  Stack,
  Typography,
} from "@mui/material";
import { useContext, useMemo, useState } from "react";
import { StarterBoxData } from "../StarterBoxes";
import { StarterContext } from "../TutorialDataHandler";

const BoxSelector = () => {
  const { box, updateBox } = useContext(StarterContext);
  const [selectedBox, setSelectedBox] = useState<string>("");

  const handleSelection = (event: SelectChangeEvent) => {
    setSelectedBox(event.target.value as string);
    if (updateBox) {
      updateBox(event.target.value as string);
    }
  };

  useMemo(() => {
    if (box !== null) {
      setSelectedBox(box.name);
    }
  }, [box]);

  const descText = useMemo(() => {
    if (selectedBox.length > 0) {
      return box?.description;
    } else {
      return "Welcome to Field Training, Commander. Select your force above to proceed to the training grounds.";
    }
  }, [selectedBox]);

  return (
    <Box height={"100%"}>
      <Stack direction={"column"} spacing={2}>
        <Typography variant="h5">Select your Starter</Typography>
        <FormControl fullWidth>
          <InputLabel id="tutorial-box-selection-label">Starter Box</InputLabel>
          <Select
            labelId="tutorial-box-selection-label"
            id="tutorial-box-selection"
            value={selectedBox}
            label="Select your Starter"
            onChange={handleSelection}
          >
            {StarterBoxData.map((s: any, i: number) => (
              <MenuItem value={s.name} key={i}>
                {s.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <Typography variant="body1">{descText}</Typography>
        <Typography variant="body1">
          This tutorial is meant as a quick introduction to some of the basic
          concepts of Warmachine. As you progress you will likely notice rules
          and abilities that aren't mentioned in this tutorial. For the full
          Warmachine experience download the Warmachine App and check out our
          advanced learning articles!
        </Typography>
      </Stack>
    </Box>
  );
};

export default BoxSelector;
