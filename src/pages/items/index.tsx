import React from 'react';
import { SearchBar } from '../../components';

export default function index() {
  const handleSearch = (searchText: string) => {
    console.log(searchText);
  };
  return (
    <div className="w-100">
      <SearchBar onSearch={handleSearch} />
    </div>
  );
}
