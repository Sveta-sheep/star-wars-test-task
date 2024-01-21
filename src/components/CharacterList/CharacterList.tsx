import { Box, Stack, Typography } from '@mui/material';
import { CharacterItem } from 'components/CharacterItem/CharacterItem';
import { CharacterColumns } from 'components/CharacterList/CharacterColumns';
import { Loader } from 'components/Loader';
import { Title } from 'components/Title';
import { useGetCharacterList } from 'queries';
import { useMemo } from 'react';

export const CharacterList = () => {
  const { characterList, isLoading } = useGetCharacterList();

  const noCharactersJSX = useMemo(
    () => (
      <Typography mt={2} variant='h5' textAlign='center' color='yellow'>
        There are no star wars characters. 🫣
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
      <Title description='There is a list of characters. You can click on each of it to see more details.' />
      <Box>
        <CharacterColumns />
        {isLoading ? <Loader /> : charactersRowsJSX}
      </Box>
    </Stack>
  );
};
