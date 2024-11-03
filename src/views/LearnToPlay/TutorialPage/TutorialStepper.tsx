import { useContext, useMemo, useState } from "react";
import { StarterContext } from "./TutorialDataHandler";
import BoxSelector from "./TutorialSteps/BoxSelector";
import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  MobileStepper,
  Select,
  SelectChangeEvent,
  Stack,
  Typography,
} from "@mui/material";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import GetToKnow from "./TutorialSteps/GetToKnow";
import TutorialTemplates from "./TutorialSteps/TutorialTemplates";
import TableSetup from "./TutorialSteps/TableSetup";
import RoundOne from "./TutorialSteps/RoundOne";
import RoundOneMain from "./TutorialSteps/RoundOneMain";
import RoundOneCtrl from "./TutorialSteps/RoundOneCtrl";
import RoundOneAct from "./TutorialSteps/RoundOneAct";
import RoundOneLeader from "./TutorialSteps/RoundOneLeader";
import RoundOneLeaderMove from "./TutorialSteps/RoundOneLeaderMove";
import RoundOneLeaderAttack from "./TutorialSteps/RoundOneLeaderAttack";
import RoundOneCohort from "./TutorialSteps/RoundOneCohort";

const TutorialStepper = () => {
  const { box } = useContext(StarterContext);
  const [activeStep, setActiveStep] = useState<number>(0);

  const handleNext = () => {
    setActiveStep(activeStep + 1);
    window.scrollTo(0, 0);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
    window.scrollTo(0, 0);
  };

  const leaderRanged = () => {
    if (box?.models.leader.rangedWeapon) {
      return <RoundOneLeaderAttack />;
    } else {
      return (
        <Stack direction="column" spacing={2}>
          <Typography variant="h5">Round One</Typography>
          <Typography variant="h6">
            Attacking with {box?.models.leader.name}
          </Typography>
          <Typography variant="body1">
            Since {box?.models.leader.name} does not have a Ranged Weapon, we'll
            use an Offensive Spell when I get around to writing that.
          </Typography>
        </Stack>
      );
    }
  };

  const selectPage = (event: SelectChangeEvent) => {
    let v: any = event.target.value;
    let i: any = steps.find((s: any) => s.label === v);

    setActiveStep(i.step - 1);
    window.scrollTo(0, 0);
  };

  const steps = [
    {
      label: "Select your box",
      content: <BoxSelector />,
      step: 1,
    },
    {
      label: "Get to know your models",
      content: <GetToKnow />,
      step: 2,
    },
    {
      label: "Templates",
      content: <TutorialTemplates />,
      step: 3,
    },
    {
      label: "Table Setup",
      content: <TableSetup />,
      step: 4,
    },
    {
      label: "Round One: Overview",
      content: <RoundOne />,
      step: 5,
    },
    {
      label: "Round One: Maintenance Phase",
      content: <RoundOneMain />,
      step: 6,
    },
    { label: "Round One: Control Phase", content: <RoundOneCtrl />, step: 7 },
    { label: "Round One: Activation Phase", content: <RoundOneAct />, step: 8 },
    {
      label: "Round One: Activating Leader",
      content: <RoundOneLeader />,
      step: 9,
    },
    {
      label: "Round One: Moving your Leader",
      content: <RoundOneLeaderMove />,
      step: 10,
    },
    {
      label: "Round One: Attacking with your Leader",
      content: leaderRanged(),
      step: 11,
    },
    {
      label: "Round One: Activating your Cohort",
      content: <RoundOneCohort />,
      step: 12,
    },
  ];

  const maxSteps = steps.length;

  const disableNext = useMemo(() => {
    if (activeStep === maxSteps - 1 || box === null) {
      return true;
    }
    return false;
  }, [box, activeStep]);

  return (
    <Box
      height={"100%"}
      bgcolor={"background.default"}
      minHeight={"100vh"}
      display={"flex"}
      flexDirection={"column"}
    >
      <Box width={"100%"}>{steps[activeStep].content}</Box>
      <MobileStepper
        variant="text"
        steps={maxSteps}
        position="static"
        activeStep={activeStep}
        nextButton={
          <Button size="small" onClick={handleNext} disabled={disableNext}>
            Next <KeyboardArrowRight />
          </Button>
        }
        backButton={
          <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
            <KeyboardArrowLeft />
            Back
          </Button>
        }
      />
      {activeStep !== 0 && (
        <FormControl fullWidth>
          <InputLabel id="page-selector-label">Jump to Page</InputLabel>
          <Select
            labelId="page-selector-label"
            id="page-selector"
            value={steps[activeStep].label}
            onChange={selectPage}
          >
            {steps.map((s: any, i: number) => (
              <MenuItem value={s.label} key={i}>
                {s.step} - {s.label}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      )}
    </Box>
  );
};

export default TutorialStepper;
