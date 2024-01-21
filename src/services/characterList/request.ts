import axiosClient from 'api/axiosClient';
import { GetCharacterListParams, GetCharacterListResponse } from 'services/characterList/types';

const getRequestParam = (page?: number, query?: string) => {
  if (query) return `/?search=${query.toLowerCase()}`;

  if (page) return `/?page=${page}`;

  return '';
};

export const getCharacterList = ({ page, query }: GetCharacterListParams) =>
  axiosClient.get<GetCharacterListResponse>(`people${getRequestParam(page, query)}`);
