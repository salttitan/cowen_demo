export interface ForceData {
  name: string;
  faction: string;
  image: string;
  id: number;
  type: string;
}

export interface FactionData {
  name: string;
  forces: ForceData[];
  image: string;
  id: number;
  description: string;
}
