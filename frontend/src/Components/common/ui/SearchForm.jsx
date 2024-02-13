import React, { useState } from 'react';
import axios from 'axios';
import { Search } from 'lucide-react';

const SearchForm = ({ handleSubmit }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    handleSubmit(searchQuery);
  };

  return (
    <form onSubmit={onSubmit} className="flex gap-1 mr-10 w-96">
      <input
        type="search"
        id="search-dropdown"
        className="p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border-s-2 border border-gray-300"
        placeholder="Search Wand, Cloaks, Sticks..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        required
      />
      <button
        type="submit"
        className="p-2.5 text-sm font-medium text-white shadow-inner bg-[#C07F00]/90 rounded-lg focus:outline-none focus:ring focus:border-[#740001]"
      >
        <Search />
      </button>
    </form>
  );
};

export default SearchForm;
