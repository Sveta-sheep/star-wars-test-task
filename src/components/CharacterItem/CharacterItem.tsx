import { Box, Typography } from '@mui/material';
import { textProps } from 'components/CharacterList';
import { getDate } from 'helpers/getDate';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from 'routers/constants';
import { CharacterItem as CharacterItemType } from 'types/character';
import { wrapperSx } from './styles';

export const CharacterItem = ({ birthYear, height, created, name, url }: CharacterItemType) => {
  const createdAt = getDate(new Date(created));
  const birthYearText = birthYear === 'unknown' ? '-' : birthYear;
  const navigate = useNavigate();

  const onItemClick = () => {
    const elements = url.split('/');
    const id = elements.at(-2) ?? '';

    navigate(`${ROUTES.CHARACTERS}/${id}`);
  };

  return (
    <Box sx={wrapperSx} onClick={onItemClick}>
      <Typography {...textProps} textAlign='left'>
        {name}
      </Typography>
      <Typography {...textProps}>{height}cm</Typography>
      <Typography {...textProps}>{birthYearText}</Typography>
      <Typography {...textProps} textAlign='right'>
        {createdAt}
      </Typography>
    </Box>
  );
};
