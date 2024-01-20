import { useQuery } from '@tanstack/react-query';
import { queryKeys } from 'helpers/queryKeys';
import { getCharacterList } from 'services/characterList/request';

export const useGetCharacterList = () => {
  const { data: characterList = [], isLoading } = useQuery({
    queryKey: [queryKeys.getCharacterList],
    queryFn: getCharacterList,
    select: (response) => {
      console.log(response);
      return response;
    },
    throwOnError: true,
  });

  return {
    characterList,
    isLoading,
  };
};
