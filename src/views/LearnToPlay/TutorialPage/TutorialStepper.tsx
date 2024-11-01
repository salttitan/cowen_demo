import { useContext, useMemo, useState } from "react";
import { StarterContext } from "./TutorialDataHandler";
import BoxSelector from "./TutorialSteps/BoxSelector";
import { Box, Button, MobileStepper, Stack, Typography } from "@mui/material";
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
import { ScrollRestoration } from "react-router-dom";

const TutorialStepper = () => {
  const { box } = useContext(StarterContext);
  const [activeStep, setActiveStep] = useState<number>(0);

  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  console.log(box);

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

  const steps = [
    {
      label: "Select your box",
      content: <BoxSelector />,
    },
    {
      label: "Get to know your models",
      content: <GetToKnow />,
    },
    {
      label: "Templates",
      content: <TutorialTemplates />,
    },
    {
      label: "Table Setup",
      content: <TableSetup />,
    },
    {
      label: "Round One",
      content: <RoundOne />,
    },
    { label: "Round One: Maintenance Phase", content: <RoundOneMain /> },
    { label: "Round One: Control Phase", content: <RoundOneCtrl /> },
    { label: "Round One: Activation Phase", content: <RoundOneAct /> },
    { label: "Round One: Activating Leader", content: <RoundOneLeader /> },
    { label: "Round One: Moving Leader", content: <RoundOneLeaderMove /> },
    {
      label: "Round One: Attacking with Leader",
      content: leaderRanged(),
    },
    { label: "Round One: Activating Cohort", content: <RoundOneCohort /> },
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
       <ScrollRestoration />
    </Box>
  );
};

export default TutorialStepper;
