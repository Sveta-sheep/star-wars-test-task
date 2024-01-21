import { Stack, Typography, useMediaQuery, useTheme } from '@mui/material';

type TitleProps = {
  description: string;
};

export const Title = ({ description }: TitleProps) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Stack alignItems='center'>
      <Typography variant={isMobile ? 'h2' : 'h1'} color='primary'>
        Star Wars
      </Typography>
      <Typography textAlign='center' variant='body1' color='primary'>
        {description}
      </Typography>
    </Stack>
  );
};
