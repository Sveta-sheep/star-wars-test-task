import { useQuery } from '@tanstack/react-query';
import { queryKeys } from 'helpers/queryKeys';
import { toCharacterStarship } from 'queries/mappers';
import { getCharacterStarship } from 'services/characterDetails/request';

export const useCharacterStarship = (url: string) => {
  const { data, isLoading } = useQuery({
    queryKey: [queryKeys.getCharacterStarship, url],
    queryFn: () => getCharacterStarship({ url }),
    select: ({ data }) => toCharacterStarship(data),
    throwOnError: true,
  });

  return {
    characterStarship: data,
    isLoading,
  };
};
