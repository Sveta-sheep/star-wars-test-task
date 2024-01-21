import { Box, Typography } from '@mui/material';
import { textProps } from 'components/CharacterList/constants';
import { wrapperCharacterColumnsSx } from 'components/CharacterList/styles';

export const CharacterColumns = () => (
  <Box sx={wrapperCharacterColumnsSx}>
    <Typography {...textProps} textAlign='left'>
      Name
    </Typography>
    <Typography {...textProps}>Height</Typography>
    <Typography {...textProps}>Birth year</Typography>
    <Typography {...textProps} textAlign='right'>
      Created
    </Typography>
  </Box>
);
