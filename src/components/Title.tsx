import { Stack, Typography } from '@mui/material';
import { useIsMobile } from 'styles/useIsMobile';

type TitleProps = {
  description: string;
};

export const Title = ({ description }: TitleProps) => {
  const isMobile = useIsMobile();

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
