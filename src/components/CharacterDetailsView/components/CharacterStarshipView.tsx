import { Box } from '@mui/material';
import {
  CharacterDetailItem,
  CharacterDetailItemType,
} from 'components/CharacterDetailsView/components/CharacterDetailItem';
import { detailsWrapperSx } from 'components/CharacterDetailsView/styles';
import { Loader } from 'components/Loader';
import { capitalize } from 'helpers/capitalize';
import { useCharacterStarship } from 'queries';
import { useMemo } from 'react';
import { useIsMobile } from 'styles/useIsMobile';

type CharacterStarshipViewProps = {
  url: string;
};

export const CharacterStarshipView = ({ url }: CharacterStarshipViewProps) => {
  const { characterStarship, isLoading } = useCharacterStarship(url);
  const isMobile = useIsMobile();

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
    <Box flexDirection={isMobile ? 'column' : 'row'} sx={detailsWrapperSx}>
      {isLoading ? (
        <Loader />
      ) : (
        characterStarshipDetailItems.map((item, i) => <CharacterDetailItem key={i} {...item} />)
      )}
    </Box>
  );
};
