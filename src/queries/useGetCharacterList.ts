import { useQuery } from '@tanstack/react-query';
import { queryKeys } from 'helpers/queryKeys';
import { toCharacterItem } from 'queries/mappers';
import { getCharacterList } from 'services/characterList/request';

type UseGetCharacterListProps = {
  query?: string;
  page?: number;
};

export const useGetCharacterList = ({ page, query }: UseGetCharacterListProps) => {
  const { data, isLoading } = useQuery({
    queryKey: [queryKeys.getCharacterList, page, query],
    queryFn: () => getCharacterList({ page, query }),
    select: ({ data }) => ({ characterList: data.results.map(toCharacterItem), count: data.count }),
    throwOnError: true,
  });

  return {
    characterList: data?.characterList ?? [],
    count: data?.count ?? 0,
    isLoading,
  };
};
