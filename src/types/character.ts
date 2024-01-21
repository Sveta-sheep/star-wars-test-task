export type CharacterItem = {
  name: string;
  height: string;
  mass: string;
  hairColor: string;
  skinColor: string;
  eyeColor: string;
  birthYear: string;
  gender: string;
  homeworld: string;
  films: string[];
  species: string[];
  vehicles: string[];
  starships: string[];
  created: string;
  edited: string;
  url: string;
};

export type CharacterSpecies = {
  averageHeight: string;
  averageLifespan: string;
  classification: string;
  created: string;
  designation: string;
  edited: string;
  eyeColors: string;
  hairColors: string;
  homeworld: string;
  language: string;
  name: string;
  people: string[];
  films: string[];
  skinColors: string;
  url: string;
};

export type CharacterStarship = {
  MGLT: string;
  cargoCapacity: string;
  consumables: string;
  costInCredits: string;
  created: string;
  crew: string;
  edited: string;
  hyperdriveRating: string;
  length: string;
  manufacturer: string;
  maxAtmospheringSpeed: string;
  model: string;
  name: string;
  passengers: string;
  films: string[];
  pilots: string[];
  starshipClass: string;
  url: string;
};
