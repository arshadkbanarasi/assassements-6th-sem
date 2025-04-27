import React, { useState } from 'react';
import { Input } from '@chakra-ui/react';

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleChange = (event) => {
    setQuery(event.target.value);
    onSearch(event.target.value);
  };

  return <Input value={query} onChange={handleChange} placeholder="Search for matches" />;
};

export default SearchBar;
