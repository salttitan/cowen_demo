import { useContext, useMemo } from "react";
import { StarterContext } from "../TutorialDataHandler";
import {
  Card,
  CardContent,
  CardHeader,
  Divider,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import { StarterLeader } from "../../../../models/StarterBoxModel";
import ModelFrame from "./ModelFrame";

const GetToKnow = () => {
  const { box } = useContext(StarterContext);

  const solos = useMemo(() => {
    if (box !== null) {
      return box.models.solo;
    } else {
      return [];
    }
  }, [box]);

  const units = useMemo(() => {
    if (box !== null) {
      return box.models.unit;
    } else {
      return [];
    }
  }, [box]);

  return (
    <Stack direction={"column"} spacing={2}>
      <Typography variant="h5">Identifying your models</Typography>

      <ModelFrame data={box?.models.leader} />
      <ModelFrame data={box?.models.cohort} />
      {solos.map((s: any, i: number) => (
        <ModelFrame data={s} key={i} />
      ))}
      {units.map((s: any, i: number) => (
        <ModelFrame data={s} key={i} />
      ))}
      <Typography variant="h6"></Typography>
    </Stack>
  );
};

export default GetToKnow;
