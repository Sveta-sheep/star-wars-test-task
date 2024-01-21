import axiosClient from 'api/axiosClient';
import { GetCharacterListParams, GetCharacterListResponse } from 'services/characterList/types';

const getRequestParam = (page?: number, query?: string) => {
  if (page) return `/?page=${page}`;

  if (query) return `/?search=${query}`;

  return '';
};

export const getCharacterList = ({ page, query }: GetCharacterListParams) =>
  axiosClient.get<GetCharacterListResponse>(`people${getRequestParam(page, query)}`);
