import axiosClient from 'api/axiosClient';
import { GetCharacterListResponse } from 'services/characterList/types';

export const getCharacterList = () => axiosClient.get<GetCharacterListResponse>('people');
