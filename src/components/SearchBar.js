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
    <div className="relative">
      <form action="" className="flex items-center" role="search" noValidate>
        <input className="border border-gray-300 rounded-l px-4 py-2 w-full" aria-label="Search" autocomplete="off" autocorrect="off" autocapitalize="off" placeholder="Product, brand, color, …" spellcheck="false" maxlength="512" type="search" value={searchTerm} onChange={handleInputChange}/>
        <button className="bg-blue-500 text-white rounded-r px-4 py-2 flex items-center" type="submit" title="Submit the search query">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 18 18" aria-hidden="true" className="mr-2">
            <g fill="none" fillRule="evenodd" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.67" transform="translate(1 1)">
              <circle cx="7.11" cy="7.11" r="7.11"></circle>
              <path d="M16 16l-3.87-3.87"></path>
            </g>
          </svg>
        </button>
        <button
          className="absolute top-0 right-0 mt-1 mr-1"
          type="reset"
          title="Clear the search query"
          onClick={handleReset}
        >
          <svg
            className="text-gray-500"
            viewBox="0 0 20 20"
            width="10"
            height="10"
            aria-hidden="true"
          >
            <path d="M8.114 10L.944 2.83 0 1.885 1.886 0l.943.943L10 8.113l7.17-7.17.944-.943L20 1.886l-.943.943-7.17 7.17 7.17 7.17.943.944L18.114 20l-.943-.943-7.17-7.17-7.17 7.17-.944.943L0 18.114l.943-.943L8.113 10z"></path>
          </svg>
        </button>
        <span className="absolute top-0 right-0 mt-2 mr-2 hidden">
          <svg
            aria-label="Results are loading"
            width="16"
            height="16"
            viewBox="0 0 38 38"
            stroke="#444"
            className="animate-spin"
            aria-hidden="true"
          >
            <g fill="none" fillRule="evenodd">
              <g transform="translate(1 1)" strokeWidth="2">
                <circle strokeOpacity=".5" cx="18" cy="18" r="18"></circle>
                <path d="M36 18c0-9.94-8.06-18-18-18">
                  <animateTransform
                    attributeName="transform"
                    type="rotate"
                    from="0 18 18"
                    to="360 18 18"
                    dur="1s"
                    repeatCount="indefinite"
                  ></animateTransform>
                </path>
              </g>
            </g>
          </svg>
        </span>
      </form>
    </div>
  );
};

export default SearchBar;
