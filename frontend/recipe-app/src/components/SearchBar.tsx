import React, { useState } from "react";

interface SearchBarProps {
  onSearch: (query: string) => void; // Accepts query instead of filtered recipes
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setQuery(value);
    onSearch(value); // Pass query to parent component
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search recipes..."
        value={query}
        onChange={handleChange}
      />
    </div>
  );
};

export default SearchBar;
