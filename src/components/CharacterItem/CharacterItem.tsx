import { Box, Typography } from '@mui/material';
import { textProps } from 'components/CharacterList';
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
      <Typography {...textProps} textAlign='left'>
        {name}
      </Typography>
      <Typography {...textProps}>{height}cm</Typography>
      <Typography {...textProps}>{birthYearText}</Typography>
      <Typography {...textProps} textAlign='right'>
        {created}
      </Typography>
    </Box>
  );
};
