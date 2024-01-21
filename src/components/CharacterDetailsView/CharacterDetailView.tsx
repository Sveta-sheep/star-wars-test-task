import { Box, Divider, Stack, Typography } from '@mui/material';
import { Loader } from 'components/Loader';
import { Title } from 'components/Title';
import { capitalize } from 'helpers/capitalize';
import { useCharacter } from 'queries';
import { useMemo } from 'react';
import { useIsMobile } from 'styles/useIsMobile';
import { CharacterDetailItem, CharacterSpeciesView, CharacterStarshipView } from './components';
import { CharacterDetailItemType } from './components/CharacterDetailItem';
import { basicInfoDetailsWrapperSx, sectionDividerSx } from './styles';

const headerDescription = 'Here is some of the details of character';

export const CharacterDetailView = () => {
  const { character, isLoading } = useCharacter();
  const isMobile = useIsMobile();

  const characterBasicInfoDetailItems: CharacterDetailItemType[] = useMemo(
    () => [
      {
        title: 'Birth Year',
        value: character?.birthYear,
      },
      {
        title: 'Gender',
        value: capitalize(character?.gender),
      },
      {
        title: 'Height',
        value: `${character?.height}cm`,
      },
      {
        title: 'Mass',
        value: `${character?.mass}kg`,
      },
      {
        title: 'Eye color',
        value: capitalize(character?.eyeColor),
      },
      {
        title: 'Skin color',
        value: capitalize(character?.skinColor),
      },
      {
        title: 'Hair Color',
        value: capitalize(character?.hairColor),
      },
    ],
    [character]
  );

  const characterDetailsJSX = (
    <>
      <Box>
        <SectionTitle title='Basic Information' />
        <Box flexDirection={isMobile ? 'column' : 'row'} sx={basicInfoDetailsWrapperSx}>
          {characterBasicInfoDetailItems.map((item, i) => (
            <CharacterDetailItem key={i} {...item} />
          ))}
        </Box>
      </Box>
      {!!character?.species.length && (
        <Box>
          <SectionTitle title='Species' />
          <Stack>{character?.species.map((url, i) => <CharacterSpeciesView key={i} url={url} />)}</Stack>
        </Box>
      )}
      {!!character?.starships.length && (
        <Box>
          <SectionTitle title='Starships' />
          <Stack>{character?.starships.map((url, i) => <CharacterStarshipView key={i} url={url} />)}</Stack>
        </Box>
      )}
    </>
  );

  return (
    <Stack gap={3}>
      <Title description={headerDescription} />
      <Typography textAlign='center' variant='h3'>
        {character?.name}
      </Typography>
      {isLoading ? <Loader /> : characterDetailsJSX}
    </Stack>
  );
};

type SectionTitleProps = {
  title: string;
};

const SectionTitle = ({ title }: SectionTitleProps) => (
  <Stack gap={1} mb={2}>
    <Divider sx={sectionDividerSx} />
    <Typography color='primary'>{title}</Typography>
    <Divider sx={sectionDividerSx} />
  </Stack>
);
