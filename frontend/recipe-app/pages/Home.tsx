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
  // Looking to use TheMealDB api for more recipe Data, Will look into mongoDB for data storage and user storage
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
        <h1>Welcome to Your Recipe Collection</h1>
        <SearchBar recipes={allRecipes} onSearch={setFilteredRecipes} />

        <div className="recipe-list">
          {filteredRecipes.length > 0 ? (
            filteredRecipes.map((recipe) => (
              <div key={recipe.id} className="recipe-card">
                {recipe.name}
              </div>
            ))
          ) : (
            <p>No recipes found</p>
          )}
        </div>
        <div className="home-container">
          <h1>Recipe List</h1>
          <div className="recipe-list">
            {allRecipes.map((recipe) => (
              <RecipeCard
                key={recipe.id}
                recipe={recipe}
                onAddToCollection={handleAddToCollection}
              />
            ))}
          </div>
          <h2>My Collection</h2>
          <div className="personal-collection">
            {allRecipes
              .filter((recipe) => personalCollection.includes(recipe.id))
              .map((recipe) => (
                <RecipeCard
                  key={recipe.id}
                  recipe={recipe}
                  onAddToCollection={() => {}}
                />
              ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
