import NavBar from "../src/components/NavBar";

import React, { useState } from "react";
import SearchBar from "../src/components/SearchBar";
import RecipeCard from "../src/components/RecipeCard";

const allRecipes = [
  {
    id: 1,
    name: "Spaghetti Bolognese",
    image: "path_to_image",
    ingredients: [
      "Spaghetti",
      "Ground Beef",
      "Tomato Sauce",
      "Onion",
      "Garlic",
    ],
    instructions:
      "Cook spaghetti. In another pan, cook beef with onions and garlic, then add tomato sauce. Combine with spaghetti.",
  },
  // Looking to use TheMealDB api for more recipe Data, Will look into mongoDB for data and user storage
];

const HomePage: React.FC = () => {
  const [filteredRecipes, setFilteredRecipes] = useState(allRecipes);
  const [personalCollection, setPersonalCollection] = useState<number[]>([]);

  const handleAddToCollection = (recipeId: number) => {
    if (!personalCollection.includes(recipeId)) {
      setPersonalCollection([...personalCollection, recipeId]);
    }
  };

  return (
    <>
      <NavBar className="NavCard" />
      <div className="home-container">
        <h1>The Solar Recipe Collection</h1>
        <SearchBar recipes={allRecipes} onSearch={setFilteredRecipes} />
        <div className="recipe-container">
          <div className="recipe-list">
            {filteredRecipes.length > 0 ? (
              filteredRecipes.map((recipe) => (
                <RecipeCard
                  key={recipe.id}
                  searchQuery=""
                  recipe={recipe}
                  onAddToCollection={handleAddToCollection}
                />
              ))
            ) : (
              <p>No recipes found</p>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
