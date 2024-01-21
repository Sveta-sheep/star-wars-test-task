import { CharacterSpeciesDTO, CharacterStarshipDTO } from 'services/characterDetails/types';
import { CharacterItemDTO } from 'services/characterList/types';
import { CharacterItem, CharacterSpecies, CharacterStarship } from 'types/character';

export const toCharacterItem = (dto: CharacterItemDTO): CharacterItem => ({
  ...dto,
  skinColor: dto.skin_color,
  birthYear: dto.birth_year,
  eyeColor: dto.eye_color,
  hairColor: dto.hair_color,
});

export const toCharacterSpecies = (dto: CharacterSpeciesDTO): CharacterSpecies => ({
  ...dto,
  averageHeight: dto.average_height ?? '',
  averageLifespan: dto.average_lifespan ?? '',
  eyeColors: dto.eye_colors ?? '',
  hairColors: dto.hair_colors ?? '',
  skinColors: dto.skin_colors ?? '',
});

export const toCharacterStarship = (dto: CharacterStarshipDTO): CharacterStarship => ({
  ...dto,
  costInCredits: dto.cost_in_credits ?? '',
  maxAtmospheringSpeed: dto.max_atmosphering_speed ?? '',
  hyperdriveRating: dto.hyperdrive_rating ?? '',
  cargoCapacity: dto.cargo_capacity ?? '',
  starshipClass: dto.starship_class ?? '',
});
