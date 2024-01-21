import { ArrowBackIos as ArrowBackIcon, ArrowForwardIos as ArrowForwardIcon } from '@mui/icons-material';
import { Box, Stack, Typography } from '@mui/material';
import { usePagination } from 'components/Pagination/usePagination';
import { Dispatch, SetStateAction } from 'react';
import { iconSx, innerWrapperSx, pageItemSx, wrapperSx } from './styles';

export type PaginationProps = {
  count: number;
  activePage: number;
  onChangePage: Dispatch<SetStateAction<number>>;
};

export const Pagination = (props: PaginationProps) => {
  const { pages, handleNextPage, activePage, handlePrevPage, onChangePage } = usePagination(props);

  return (
    <Box sx={wrapperSx}>
      <Stack sx={innerWrapperSx}>
        <ArrowBackIcon onClick={handlePrevPage} sx={iconSx} color='primary' fontSize='small' />
        {pages.map((page, i) => (
          <Box
            key={i}
            sx={{
              ...pageItemSx,
              ...(page === activePage ? { border: '1px solid', borderColor: 'primary.main', borderRadius: '50%' } : {}),
            }}
            onClick={() => onChangePage(page)}
          >
            <Typography>{page}</Typography>
          </Box>
        ))}
        <ArrowForwardIcon onClick={handleNextPage} sx={iconSx} color='primary' fontSize='small' />
      </Stack>
    </Box>
  );
};
