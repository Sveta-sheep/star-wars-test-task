import { TextField } from '@mui/material';
import { ChangeEvent, Dispatch, SetStateAction, useEffect, useState } from 'react';

type SearchInputProps = {
  setQuery: Dispatch<SetStateAction<string>>;
};

export const SearchInput = ({ setQuery }: SearchInputProps) => {
  const [inputValue, setInputValue] = useState('');

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  useEffect(() => {
    const debounceTimeoutId = setTimeout(() => {
      setQuery(inputValue);
    }, 500);

    return () => clearTimeout(debounceTimeoutId);
  }, [inputValue]);

  return (
    <TextField
      sx={{
        backgroundColor: 'secondary.main',
        width: '50%',
      }}
      InputProps={{
        style: {
          color: 'white',
        },
      }}
      inputMode='search'
      color='primary'
      onChange={onChange}
      value={inputValue}
      placeholder='Search for character'
    />
  );
};
