import { PaginationProps } from 'components/Pagination/Pagination';
import { useEffect, useState } from 'react';

export const CHARACTERS_PER_PAGE = 10;
const PAGES_COUNT_TO_SHOW = 5;
const SIBLINGS_COUNT = 2;

const getPageNumbers = (start: number) => Array.from({ length: PAGES_COUNT_TO_SHOW }, (_, i) => start + i);

export const usePagination = ({ onChangePage, activePage, count }: PaginationProps) => {
  const [pagesCount, setPagesCount] = useState(Math.ceil(count / CHARACTERS_PER_PAGE));
  const [pages, setPages] = useState<number[]>([]);

  useEffect(() => {
    if (count === pagesCount) return;

    setPagesCount(Math.ceil(count / CHARACTERS_PER_PAGE));
  }, [count]);

  useEffect(() => {
    if (!pagesCount) return;

    if (activePage <= SIBLINGS_COUNT) return setPages(getPageNumbers(1));

    const lastPage = pages.at(-1);
    if (lastPage === pagesCount && activePage > pagesCount - SIBLINGS_COUNT) return;

    setPages(getPageNumbers(activePage - SIBLINGS_COUNT));
  }, [activePage, pagesCount]);

  const handlePrevPage = () => {
    onChangePage((prevPage) => prevPage - (prevPage <= 1 ? 0 : 1));
  };

  const handleNextPage = () => {
    onChangePage((prevPage) => prevPage + (prevPage >= pagesCount ? 0 : 1));
  };

  return {
    activePage,
    pages,
    onChangePage,
    handleNextPage,
    handlePrevPage,
  };
};
