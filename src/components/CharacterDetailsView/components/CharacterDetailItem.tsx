import { Stack, Typography } from '@mui/material';

export type CharacterDetailItemType = {
  title: string;
  value?: string;
};

export const CharacterDetailItem = ({ title, value }: CharacterDetailItemType) =>
  value ? (
    <Stack alignItems='center'>
      <Typography sx={{ textDecoration: 'underscore', fontWeight: 600 }}>{title}</Typography>
      <Typography>{value}</Typography>
    </Stack>
  ) : (
    <></>
  );
