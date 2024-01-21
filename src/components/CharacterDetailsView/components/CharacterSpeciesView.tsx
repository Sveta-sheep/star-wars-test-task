import { Box } from '@mui/material';
import {
  CharacterDetailItem,
  CharacterDetailItemType,
} from 'components/CharacterDetailsView/components/CharacterDetailItem';
import { detailsWrapperSx } from 'components/CharacterDetailsView/styles';
import { Loader } from 'components/Loader';
import { capitalize } from 'helpers/capitalize';
import { useCharacterSpecies } from 'queries';
import { useMemo } from 'react';
import { useIsMobile } from 'styles/useIsMobile';

type CharacterSpeciesViewProps = {
  url: string;
};

export const CharacterSpeciesView = ({ url }: CharacterSpeciesViewProps) => {
  const { characterSpecies, isLoading } = useCharacterSpecies(url);
  const isMobile = useIsMobile();

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
    <Box flexDirection={isMobile ? 'column' : 'row'} sx={detailsWrapperSx}>
      {isLoading ? <Loader /> : characterSpeciesDetailItems.map((item, i) => <CharacterDetailItem key={i} {...item} />)}
    </Box>
  );
};
