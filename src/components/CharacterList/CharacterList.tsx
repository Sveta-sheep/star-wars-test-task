import { Box, Stack, Typography } from '@mui/material';
import { CharacterItem } from 'components/CharacterItem/CharacterItem';
import { CharacterColumns } from 'components/CharacterList/CharacterColumns';
import { headerDescription, noCharactersText } from 'components/CharacterList/constants';
import { Loader } from 'components/Loader';
import { Title } from 'components/Title';
import { useGetCharacterList } from 'queries';
import { useMemo } from 'react';

export const CharacterList = () => {
  const { characterList, isLoading } = useGetCharacterList();

  const noCharactersJSX = useMemo(
    () => (
      <Typography mt={2} variant='h5' textAlign='center' color='primary'>
        {noCharactersText}
      </Typography>
    ),
    [characterList]
  );

  const characterItemJSX = useMemo(
    () =>
      characterList.map(({ name, height, birthYear, created }, index) => (
        <CharacterItem key={index} name={name} birthYear={birthYear} height={height} createdAt={created} />
      )),
    [characterList]
  );

  const charactersRowsJSX = characterList.length ? characterItemJSX : noCharactersJSX;

  return (
    <Stack gap={2}>
      <Title description={headerDescription} />
      <Box>
        <CharacterColumns />
        {isLoading ? <Loader /> : charactersRowsJSX}
      </Box>
    </Stack>
  );
};
