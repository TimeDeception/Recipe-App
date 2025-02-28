import React, { useState } from "react";

interface SearchBarProps {
  recipes: {
    id: number;
    name: string;
    image: string;
    ingredients: string[];
    instructions: string;
  }[]; // Adjust according to your recipe structure
  onSearch: (
    filteredRecipes: {
      id: number;
      name: string;
      image: string;
      ingredients: string[];
      instructions: string;
    }[]
  ) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ recipes, onSearch }) => {
  const [query, setQuery] = useState("");

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.toLowerCase();
    setQuery(value);

    const filtered = recipes.filter((recipe) =>
      recipe.name.toLowerCase().includes(value)
    );
    onSearch(filtered);
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search recipes..."
        value={query}
        onChange={handleSearch}
      />
    </div>
  );
};

export default SearchBar;
