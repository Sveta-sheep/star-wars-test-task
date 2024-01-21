import { useQuery } from '@tanstack/react-query';
import { queryKeys } from 'helpers/queryKeys';
import { toCharacterItem } from 'queries/mappers';
import { getCharacterList } from 'services/characterList/request';

export const useGetCharacterList = () => {
  const { data: characterList = [], isLoading } = useQuery({
    queryKey: [queryKeys.getCharacterList],
    queryFn: getCharacterList,
    select: (response) => response.data.results.map(toCharacterItem),
    throwOnError: true,
  });

  return {
    characterList,
    isLoading,
  };
};
