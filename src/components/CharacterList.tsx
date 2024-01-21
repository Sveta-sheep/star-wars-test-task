import { Box, Stack, Typography } from '@mui/material';
import { CharacterItem } from 'components/CharacterItem/CharacterItem';
import { Title } from 'components/Title';
import { useGetCharacterList } from 'queries';

export const CharacterList = () => {
  const { characterList } = useGetCharacterList();

  return (
    <Stack gap={2}>
      <Title description='There is a list of characters. You can click on each of it to see more details.' />
      <Box>
        <Box sx={{ borderBottom: '1px solid yellow', py: 1, justifyContent: 'space-between', display: 'flex' }}>
          <Typography width='25%' variant='body1'>
            Name
          </Typography>
          <Typography textAlign='center' width='25%' variant='body1'>
            Height
          </Typography>
          <Typography textAlign='center' width='25%' variant='body1'>
            Birth year
          </Typography>
          <Typography textAlign='right' width='25%' variant='body1'>
            Created
          </Typography>
        </Box>
        {characterList.map(({ name, height, birthYear, created }, index) => (
          <CharacterItem key={index} name={name} birthYear={birthYear} height={height} createdAt={created} />
        ))}
      </Box>
    </Stack>
  );
};
