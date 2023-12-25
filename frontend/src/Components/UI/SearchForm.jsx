import React from 'react';
import { Search } from 'lucide-react';
import { ChevronDown } from 'lucide-react';

const SearchForm = () => {
  return (
    
<form>
  <div className="flex">
   
    <button
      id="dropdown-button"
      data-dropdown-toggle="dropdown"
      className="flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-gray-900 bg-gray-100 border border-gray-300 rounded-s-lg hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 "
      type="button"
    >
      All categories <ChevronDown size={15}/>
    </button>
    <div className="relative w-full">
      <input
        type="search"
        id="search-dropdown"
        className="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-e-lg border-s-gray-50 border-s-2 border border-gray-300 focus:outline-[#740001]"
        placeholder="Search Wand,Cloaks,Sticks..."
        required
      />
      <button
        type="submit"
        className="absolute top-0 end-0 p-2.5 text-sm font-medium h-full text-white shadow-inner bg-[#C07F00]/90 rounded-e-lg"
      >
      <Search/>
      </button>
    </div>
  </div>
</form>

      );
};

export default SearchForm;
