import { Box, Grid2 } from "@mui/material";
import { FactionData } from "../models/FactionModels";
import FactionCard from "./Gallery/FactionCard";

const Factions: FactionData[] = [
  {
    name: "Cygnar",
    image: "faction-cygnar-color.png",
    forces: [
      {
        name: "Storm Legion",
        faction: "Cygnar",
        image: "faction-cygnar-color.png",
        id: 0,
        type: "Army",
      },
      {
        name: "Storm Forge",
        faction: "Cygnar",
        image: "/",
        id: 1,
        type: "Cadre",
      },
    ],
    description:
      " The kingdom of Cygnar has long held a comfortable position as Immoren's wealthiest and most technologically advanced nation, but this has not come without cost. Cygnar has endured decades of civil wars, political turmoil, and the constant toll of the widespread battles that have gripped Immoren for generations as other nations vie for control.",
    id: 0,
  },
  {
    name: "Orgoth",
    image: "faction-orgoth-color.png",
    forces: [
      {
        name: "Sea Raiders",
        faction: "Orgoth",
        image: "/",
        id: 1,
        type: "Army",
      },
    ],
    description:
      "The ancient enemy of the Iron Kingdoms, back from their exile once again! After the failure of Orgoth’s previous invasion, the warlords who led it have been supplanted by the warwitches that once served them. They are now strengthened by the dark magics these warwitches wield, and armed with weapons inspired by those which defeated them four centuries ago.",
    id: 1,
  },
  {
    name: "Khador",
    image: "faction-khador-color.png",
    forces: [
      {
        name: "Winter Korp",
        faction: "Khador",
        image: "/",
        id: 2,
        type: "Army",
      },
    ],
    description:
      "Hailing from the icy northern tundra of the Iron Kingdoms, the people of Khador are known for dogged determination and unwavering resilience. Despite their lack of resources in the north and the engineering difficulties posed by their rugged homeland, the Khadoran’s have been able to hold their own through sheer force of will, and liberal application of thick steel plating. ",
    id: 3,
  },
  {
    name: "Dusk",
    image: "faction-dusk-house-kallyss-color.png",
    forces: [
      {
        name: "House Kallyss",
        faction: "Dusk",
        image: "/",
        id: 3,
        type: "Army",
      },
    ],
    description:
      "The great elven nation of Ios is no more—may the Eldritch Lords of the Kingdom of Eternal Dusk reign forever. Their sordid history has led them to the brink: soulless, cursed by vampiric thirst, damned by their dark past. And yet House Kallyss, a key political player in the courts of Dusk, have pledged themselves to the defence of Immoren and the Iron Kingdoms in order to atone for the faults of their forebears. Will they succeed as unlikely allies of the human nations of Immoren?",
    id: 3,
  },
];

const Gallery = () => {
  return (
    <Box
      height={"100%"}
      bgcolor={"background.default"}
      minHeight={"100vh"}
      display={"flex"}
      flexDirection={"column"}
      // alignItems="center"
    >
      <Grid2 container spacing={3}>
        {Factions.map((f: any, i: number) => (
          <Grid2 size={3}>
            <FactionCard faction={f} />
          </Grid2>
        ))}
      </Grid2>
    </Box>
  );
};

export default Gallery;
