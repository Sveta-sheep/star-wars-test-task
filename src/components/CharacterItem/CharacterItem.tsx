import { Box, Typography } from '@mui/material';
import { getDate } from 'helpers/getDate';
import { wrapperSx } from './styles';

type CharacterItemProps = {
  name: string;
  birthYear: string;
  height: string;
  createdAt: string;
};

export const CharacterItem = ({ birthYear, height, createdAt, name }: CharacterItemProps) => {
  const created = getDate(new Date(createdAt));
  const birthYearText = birthYear === 'unknown' ? '-' : birthYear;

  return (
    <Box sx={wrapperSx}>
      <Typography width='25%' variant='body1'>
        {name}
      </Typography>
      <Typography textAlign='center' width='25%' variant='body1'>
        {height}cm
      </Typography>
      <Typography textAlign='center' width='25%' variant='body1'>
        {birthYearText}
      </Typography>
      <Typography textAlign='right' width='25%' variant='body1'>
        {created}
      </Typography>
    </Box>
  );
};
