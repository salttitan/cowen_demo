import { StarterBox } from "../../../models/StarterBoxModel";

export const StarterBoxData: StarterBox[] = [
  //   {
  //     name: "",
  //     resource: "",
  //     description:
  //       "Welcome to Field Training, Commander. Select your force above to proceed to the training grounds.",
  //   },
  {
    name: "Necrofactorium",
    resource: "Focus",
    description:
      "The Cryx Necrofactorium uses a combination of dark magic, clinical science, and the decaying energy of draconic blight to create forces that are large and powerful. Expect to steal the souls of your enemies, tear into their warjacks in close quarters to repair your own, and march ever forward, advancing quickly over the fallen corpses of your foes, swelling your ranks with undead thralls, always pushing onwards. The grim tide of the living dead cannot be stopped!",
    models: {
      leader: {
        name: "Wraithbinder Nekane",
        type: "Warcaster",
        image: "wraithbinder_nekane.png",
        rangedWeapon: {
          name: "Rune Thrower",
          type: "ranged",
          image: "wraithbinder-nekane-ranged.jpg",
          rng: 10,
          pow: 10,
          rof: "d3+1",
          rat: 7,
        },
        meleeWeapon: {
          name: "Hellspike",
          type: "melee",
          image: "wraithbinder-nekane-melee.jpg",
          rng: 1,
          pow: 12,
          mat: 6,
        },
        spd: 7,
        arc: 6,
        spells: [
          {
            name: "Mirage",
            type: "spell",
            image: "wraithbinder-nekane-mirage.jpg",
            rng: 6,
            aat: 6,
            cost: 2,
            upkeep: true,
            off: false,
            dur: "UP",
            pow: 0,
            desc: "Mirage is a potent movement ability, allowing a model to be place 2 inches from it's current location during your Control Phase. It won't benefit us now, but since it is an Upkeep Spell it will still be in effect on Round 2.",
          },
          {
            name: "Venom",
            type: "spell",
            image: "wraithbinder-nekane-venom.jpg",
            rng: "SP 10",
            aat: 6,
            cost: 2,
            upkeep: false,
            off: true,
            dur: "-",
            pow: 10,
            desc: "Venom is an offensive Spray Spell that lets you deal damage to multiple models at once.",
          },
        ],
      },
      cohort: {
        name: "Hades",
        type: "Heavy Warjack",
        spd: 6,
        image: "hades.png",
        rangedWeapon: {
          name: "Soul Cannon",
          type: "ranged",
          image: "hades-ranged.jpg",
          rng: 12,
          pow: 15,
          rof: 1,
          rat: 6,
        },
        meleeWeapon: {
          name: "Death Claw",
          type: "melee",
          image: "hades-melee.jpg",
          rng: 1,
          pow: 17,
          mat: 8,
        },
      },
      unit: [
        {
          name: "The Furies",
          spd: 6,
          type: "Unit",
          image: "option_cryx_furies_Anathan.png",
          spell: {
            name: "Stygian Abyss",
            type: "spell",
            image: "furies_stygian.jpg",
            rng: 10,
            pow: 12,
            aat: 7,
          },
        },
      ],
      solo: [
        {
          name: "Master Necrotech Chatterbane",
          type: "Solo",
          spd: 6,
          image: "chatterbane.png",
        },
      ],
    },
  },
  {
    name: "Hellslingers",
    resource: "Focus",
    description:
      "Caine and his Hellslingers bring a storm of magical bullets to the battlefield.",
    models: {
      leader: {
        name: "Major Allister Caine",
        type: "Warcaster",
        image: "Caine.png",
        rangedWeapon: {
          name: "Spellstorm Pistol",
          type: "ranged",
          image: "major-allister-caine-ranged.JPG",
          rng: 12,
          pow: 12,
          rof: 1,
          rat: 9,
        },
        spd: 7,
        arc: 6,
        spells: [
          {
            name: "Snipe",
            type: "spell",
            image: "major-allister-caine-snipe.JPG",
            rng: 6,
            aat: 6,
            cost: 2,
            upkeep: true,
            off: false,
            dur: "UP",
            pow: 0,
            desc: "Snipe is a potent buff for ranged models, allowing them to strike from greater distances.",
          },
          {
            name: "Calamity",
            type: "spell",
            image: "major-allister-caine-calamity.JPG",
            rng: 10,
            aat: 6,
            cost: 2,
            upkeep: true,
            off: true,
            dur: "UP",
            pow: 0,
            desc: "Calamity is an offensive debuff spell that weakens enemy models, making it easier for Caine and his forces to pick them off.",
          },
        ],
      },
      cohort: {
        name: "Deuce",
        type: "Heavy Warjack",
        spd: 6,
        image: "Cygnar_Deuce-Warjack.png",
        rangedWeapon: {
          name: "Spellstorm Cannon",
          type: "ranged",
          image: "deuce-ranged.jpg",
          rng: 12,
          pow: 14,
          rof: 1,
          rat: 7,
        },
        meleeWeapon: {
          name: "Crescent Blade",
          type: "melee",
          image: "deuce-melee.jpg",
          rng: 1,
          pow: 15,
          mat: 1,
        },
      },
      unit: [
        {
          name: "The Black 13th",
          spd: 6,
          type: "Unit",
          image: "Cygnar_Black13th.png",
          spell: {
            name: "Stygian Abyss",
            type: "spell",
            image: "furies_stygian.jpg",
            rng: 10,
            pow: 12,
            aat: 7,
          },
        },
      ],
      solo: [
        {
          name: "Captain Bastion Falk",
          type: "Solo",
          spd: 6,
          image: "Cygnar_Captain-Bastian-Falk.png",
        },
      ],
    },
  },
  {
    name: "Fire Tongue Warriors",
    resource: "Fury",
    description:
      "The warriors of the Fire Tongue bring flame and faith to the armies of the Sourthern Kriels!",
    models: {
      leader: {
        name: "Warchief Bagadibawm",
        type: "Warlock",
        image: "bagadibawm.png",

        meleeWeapon: {
          name: "Sacred Flame",
          type: "melee",
          image: "wraithbinder-nekane-melee.jpg",
          rng: 1,
          pow: 12,
          mat: 6,
        },
        spd: 7,
        arc: 6,
        spells: [
          {
            name: "Iron Flesh",
            type: "spell",
            image: "bagadibawm-iron-flesh.JPG",
            rng: 6,
            aat: 6,
            cost: 2,
            upkeep: true,
            off: false,
            dur: "UP",
            pow: 0,
            desc: "Iron Flesh provides a boost to the target's ARM, making them more resiliant to enemy attacks.",
          },
          {
            name: "Brand of Fire",
            type: "spell",
            image: "bagadibawm-bof.JPG",
            rng: 10,
            aat: 6,
            cost: 3,
            upkeep: false,
            off: true,
            dur: "-",
            pow: 14,
            desc: "Brand of Fire is an offensive Spell that lets you deal damage while setting your enemies on fire.",
          },
        ],
      },
      cohort: {
        name: "the Vorogger",
        type: "Heavy Warbeast",
        spd: 6,
        image: "vorogger.png",
        rangedWeapon: {
          name: "Flame Tongue",
          type: "ranged",
          image: "hades-ranged.jpg",
          rng: 12,
          pow: 15,
          rof: 1,
          rat: 6,
        },
        meleeWeapon: {
          name: "Death Claw",
          type: "melee",
          image: "hades-melee.jpg",
          rng: 1,
          pow: 17,
          mat: 8,
        },
      },
      unit: [
        {
          name: "Fire Spitters",
          spd: 6,
          type: "Unit",
          image: "fire_spitter.png",
        },
        {
          name: "Spirit Shamans",
          spd: 6,
          type: "Unit",
          image: "bullcroak_shaman.png",
          spell: {
            name: "Stygian Abyss",
            type: "spell",
            image: "furies_stygian.jpg",
            rng: 10,
            pow: 12,
            aat: 7,
          },
        },
      ],
      solo: [
        {
          name: "Fire Guardian",
          type: "Solo",
          spd: 6,
          image: "fire_guardian.png",
        },
      ],
    },
  },
];
