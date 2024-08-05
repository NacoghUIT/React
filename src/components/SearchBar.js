import React, { useState } from 'react';

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleReset = () => {
    setSearchTerm('');
  };

  return (
    <div className="relative w-[740px] h-[64px]">
      <form action="" className="flex items-center h-full" role="search" noValidate>
        <input className="rounded-md pt-1 px-12 pb-0 pl-16 h-full w-full border-gray-300 active:border-customYellow" aria-label="Search" autoComplete="off" autoCorrect="off" autoCapitalize="off" placeholder="Product, brand, color, …" spellCheck="false" maxLength="512" type="search" value={searchTerm} onChange={handleInputChange} />
        <button className="absolute top-1/2 left-0 flex h-[64px] items-center justify-center -translate-y-1/2 w-[64px] text-customYellow py-0 px-4 pl-8" type="submit" title="Submit the search query">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 18 18" aria-hidden="true" className="text-customYellow">
            <g fill="none" fillRule="evenodd" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.67" transform="translate(1 1)">
              <circle cx="7.11" cy="7.11" r="7.11"></circle>
              <path d="M16 16l-3.87-3.87"></path>
            </g>
          </svg>
        </button>
        {searchTerm && (
          <button className="absolute top-1/2 right-0 w-[48px] h-full flex items-center justify-center -translate-y-1/2" type="reset" title="Clear the search query" onClick={handleReset}>
            <svg className="text-gray-500" viewBox="0 0 20 20" width="10" height="10" aria-hidden="true">
              <path d="M8.114 10L.944 2.83 0 1.885 1.886 0l.943.943L10 8.113l7.17-7.17.944-.943L20 1.886l-.943.943-7.17 7.17 7.17 7.17.943.944L18.114 20l-.943-.943-7.17-7.17-7.17 7.17-.944.943L0 18.114l.943-.943L8.113 10z"></path>
            </svg>
          </button>
        )}
      </form>
    </div>
  );
};

export default SearchBar;
