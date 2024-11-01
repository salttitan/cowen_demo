export interface StarterModel {
  name: string;
  rangedWeapon?: StarterRangedWeapon;
  meleeWeapon?: StarterMeleeWeapon;
  spell?: StarterNLSpell;
  spd: number;
  image: string;
  type: string;
}

export interface StarterWeapon {
  name: string;
  type: string;
  image: string;
  rng: number | string;
  pow: number;
  effects?: string;
}

export interface StarterRangedWeapon extends StarterWeapon {
  rof: string | number;
  rat: number;
}

export interface StarterMeleeWeapon extends StarterWeapon {
  mat: number;
}

export interface StarterLeaderSpell extends StarterWeapon {
  aat: number;
  cost: number;
  upkeep: boolean;
  dur: string;
  off: boolean;
  desc: string;
}

export interface StarterNLSpell extends StarterWeapon {
  aat: number;
}

export interface StarterLeader extends StarterModel {
  arc: number;
  spells: StarterLeaderSpell[];
}

export interface StarterBox {
  name: string;
  resource?: string;
  models: {
    leader: StarterLeader;
    cohort: StarterModel;
    unit: StarterModel[];
    solo: StarterModel[];
  };

  description: string;
}
