import React from 'react';
import SerachBar from '../../components/searchBar';

export default function index() {
  const handleSearch = (searchText: string) => {
    console.log(searchText);
  };
  return (
    <div className="w-100">
      <SerachBar onSearch={handleSearch} />
    </div>
  );
}
