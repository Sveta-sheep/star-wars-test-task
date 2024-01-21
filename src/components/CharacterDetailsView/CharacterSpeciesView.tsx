import { Box } from '@mui/material';
import { CharacterDetailItem, CharacterDetailItemType } from 'components/CharacterDetailsView/CharacterDetailItem';
import { Loader } from 'components/Loader';
import { capitalize } from 'helpers/capitalize';
import { useCharacterSpecies } from 'queries';
import { useMemo } from 'react';

type CharacterSpeciesViewProps = {
  url: string;
};

export const CharacterSpeciesView = ({ url }: CharacterSpeciesViewProps) => {
  const { characterSpecies, isLoading } = useCharacterSpecies(url);

  const characterSpeciesDetailItems: CharacterDetailItemType[] = useMemo(
    () => [
      {
        title: 'Average lifespan',
        value: characterSpecies?.averageLifespan === 'unknown' ? '-' : characterSpecies?.averageLifespan,
      },
      {
        title: 'Classification',
        value: capitalize(characterSpecies?.classification),
      },
      {
        title: 'Language',
        value: capitalize(characterSpecies?.language),
      },
    ],
    [characterSpecies]
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
      {isLoading ? <Loader /> : characterSpeciesDetailItems.map((item, i) => <CharacterDetailItem key={i} {...item} />)}
    </Box>
  );
};
