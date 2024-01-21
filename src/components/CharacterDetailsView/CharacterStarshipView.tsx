import { Box } from '@mui/material';
import { CharacterDetailItem, CharacterDetailItemType } from 'components/CharacterDetailsView/CharacterDetailItem';
import { Loader } from 'components/Loader';
import { capitalize } from 'helpers/capitalize';
import { useCharacterStarship } from 'queries';
import { useMemo } from 'react';

type CharacterStarshipViewProps = {
  url: string;
};

export const CharacterStarshipView = ({ url }: CharacterStarshipViewProps) => {
  const { characterStarship, isLoading } = useCharacterStarship(url);

  const characterStarshipDetailItems: CharacterDetailItemType[] = useMemo(
    () => [
      {
        title: 'Star ship name',
        value: capitalize(characterStarship?.name),
      },
      {
        title: 'Star ships model',
        value: capitalize(characterStarship?.model),
      },
      {
        title: 'Passengers',
        value: capitalize(characterStarship?.passengers),
      },
    ],
    [characterStarship]
  );

  return (
    <Box
      display='flex'
      justifyContent='space-between'
      alignItems='center'
      borderBottom='1px solid white'
      pb={2}
      px={2}
      mb={3}
    >
      {isLoading ? (
        <Loader />
      ) : (
        characterStarshipDetailItems.map((item, i) => <CharacterDetailItem key={i} {...item} />)
      )}
    </Box>
  );
};
