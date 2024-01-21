import { CharacterItemDTO } from 'services/characterList/types';
import { CharacterItem } from 'types/character';

export const toCharacterItem = (dto: CharacterItemDTO): CharacterItem => ({
  ...dto,
  skinColor: dto.skin_color,
  birthYear: dto.birth_year,
  eyeColor: dto.eye_color,
  hairColor: dto.hair_color,
});
