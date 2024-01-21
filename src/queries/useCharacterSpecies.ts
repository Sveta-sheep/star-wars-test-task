import { useQuery } from '@tanstack/react-query';
import { queryKeys } from 'helpers/queryKeys';
import { toCharacterSpecies } from 'queries/mappers';
import { getCharacterSpecies } from 'services/characterDetails/request';

export const useCharacterSpecies = (url: string) => {
  const { data, isLoading } = useQuery({
    queryKey: [queryKeys.getCharacterSpecies, url],
    queryFn: () => getCharacterSpecies({ url }),
    select: ({ data }) => toCharacterSpecies(data),
    throwOnError: true,
  });

  return {
    characterSpecies: data,
    isLoading,
  };
};
