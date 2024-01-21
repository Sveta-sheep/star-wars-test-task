import axiosClient from 'api/axiosClient';
import {
  GetCharacterByIdParams,
  GetCharacterByIdResponse,
  GetCharacterSpeciesParams,
  GetCharacterSpeciesResponse,
  GetCharacterStarShipParams,
  GetCharacterStarshipResponse,
} from './types';

export const getCharacterById = ({ id }: GetCharacterByIdParams) =>
  axiosClient.get<GetCharacterByIdResponse>(`people/${id}`);

export const getCharacterSpecies = ({ url }: GetCharacterSpeciesParams) =>
  axiosClient.get<GetCharacterSpeciesResponse>(url);

export const getCharacterStarship = ({ url }: GetCharacterStarShipParams) =>
  axiosClient.get<GetCharacterStarshipResponse>(url);
