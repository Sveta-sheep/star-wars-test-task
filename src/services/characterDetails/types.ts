import { CharacterItemDTO } from 'services/characterList/types';

// Params

export type GetCharacterByIdParams = {
  id: string;
};

export type GetCharacterSpeciesParams = {
  url: string;
};

export type GetCharacterStarShipParams = {
  url: string;
};

// Response

export type CharacterSpeciesDTO = {
  average_height: string;
  average_lifespan: string;
  classification: string;
  created: string;
  designation: string;
  edited: string;
  eye_colors: string;
  hair_colors: string;
  homeworld: string;
  language: string;
  name: string;
  people: string[];
  films: string[];
  skin_colors: string;
  url: string;
};

export type CharacterStarshipDTO = {
  MGLT: string;
  cargo_capacity: string;
  consumables: string;
  cost_in_credits: string;
  created: string;
  crew: string;
  edited: string;
  hyperdrive_rating: string;
  length: string;
  manufacturer: string;
  max_atmosphering_speed: string;
  model: string;
  name: string;
  passengers: string;
  films: string[];
  pilots: string[];
  starship_class: string;
  url: string;
};

export type GetCharacterByIdResponse = CharacterItemDTO;
export type GetCharacterSpeciesResponse = CharacterSpeciesDTO;
export type GetCharacterStarshipResponse = CharacterStarshipDTO;
