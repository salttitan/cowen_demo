import { createContext, useMemo, useState } from "react";
import { StarterBox } from "../../../models/StarterBoxModel";
import { StarterBoxData } from "./StarterBoxes";
import TutorialStepper from "./TutorialStepper";
import { useLoaderData } from "react-router-dom";

interface StarterCxt {
  box: StarterBox | null;
  updateBox?: (data: any) => void;
}

const defaultCxt: StarterCxt = {
  box: null,
};

export const StarterContext = createContext<StarterCxt>(defaultCxt);

export const TutorialDataHandler = () => {
  const [box, setBox] = useState<StarterBox | null>(defaultCxt.box);
  const l: any = useLoaderData();

  const updateBox = (change: string) => {
    let b = StarterBoxData.find((o, i) => {
      if (o.name === change) {
        return StarterBoxData[i];
      }
    });
    if (b !== undefined) {
      setBox(b);
    }
  };

  useMemo(() => {
    console.log(l);
    if (l.army) {
      updateBox(l.army);
    }
  }, [l]);

  return (
    <StarterContext.Provider value={{ box: box, updateBox: updateBox }}>
      <TutorialStepper />
    </StarterContext.Provider>
  );
};
