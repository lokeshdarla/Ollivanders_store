import React, { useState } from 'react';
import axios from 'axios';
import { Search } from 'lucide-react';

const SearchForm = ({ HandleSubmit }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    HandleSubmit(searchQuery);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="relative w-96 mr-10">
        <input
          type="search"
          id="search-dropdown"
          className="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-lg border-s-gray-50 border-s-2 border border-gray-300 focus:outline-[#740001]"
          placeholder="Search Wand, Cloaks, Sticks..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          required
        />
        <button
          type="submit"
          className="absolute top-0 end-0 p-2.5 text-sm font-medium h-full text-white shadow-inner bg-[#C07F00]/90 rounded-e-lg"
        >
          <Search />
        </button>
      </div>
    </form>
  );
};

export default SearchForm;
