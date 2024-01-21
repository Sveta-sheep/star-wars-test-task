import { Box, Stack, Typography } from '@mui/material';
import { CharacterItem } from 'components/CharacterItem/CharacterItem';
import { CharacterColumns } from 'components/CharacterList/CharacterColumns';
import { headerDescription, noCharactersText } from 'components/CharacterList/constants';
import { Loader } from 'components/Loader';
import { Pagination } from 'components/Pagination/Pagination';
import { CHARACTERS_PER_PAGE } from 'components/Pagination/usePagination';
import { Title } from 'components/Title';
import { useGetCharacterList } from 'queries';
import { useMemo, useState } from 'react';

export const CharacterList = () => {
  const [activePage, setActivePage] = useState(1);
  const { characterList, count, isLoading } = useGetCharacterList({ page: activePage });

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
        {/*57px is the height of one character item*/}
        <Box minHeight={`calc(57px * ${CHARACTERS_PER_PAGE})`}>{isLoading ? <Loader /> : charactersRowsJSX}</Box>
      </Box>
      <Pagination count={count} activePage={activePage} onChangePage={setActivePage} />
    </Stack>
  );
};
