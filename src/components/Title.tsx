import { Stack, Typography } from '@mui/material';

type TitleProps = {
  description: string;
};

export const Title = ({ description }: TitleProps) => (
  <Stack alignItems='center'>
    <Typography variant='h1' color='yellow'>
      Star Wars
    </Typography>
    <Typography textAlign='center' variant='body1' color='yellow'>
      {description}
    </Typography>
  </Stack>
);
