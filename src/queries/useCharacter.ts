import { useQuery } from '@tanstack/react-query';
import { queryKeys } from 'helpers/queryKeys';
import { toCharacterItem } from 'queries/mappers';
import { useParams } from 'react-router-dom';
import { RouteParams } from 'routers/constants';
import { getCharacterById } from 'services/characterDetails/request';

export const useCharacter = () => {
  const { [RouteParams.CHARACTER_ID]: characterId = '' } = useParams();

  const { data, isLoading } = useQuery({
    queryKey: [queryKeys.getCharacter, characterId],
    queryFn: () => getCharacterById({ id: characterId }),
    select: ({ data }) => toCharacterItem(data),
    throwOnError: true,
  });

  return {
    character: data,
    isLoading,
  };
};
