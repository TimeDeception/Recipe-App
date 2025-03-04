import React, { useState, useEffect } from "react";
import NavBar from "../src/components/NavBar";
import SearchBar from "../src/components/SearchBar";
import RecipeCard from "../src/components/RecipeCard";
import { fetchRecipesByName } from "../src/api";
import { Recipe } from "../src/components/types";

const HomePage: React.FC = () => {
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [personalCollection, setPersonalCollection] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    handleSearch(""); // Default search
  }, []);

  const handleSearch = async (query: string) => {
    setLoading(true);
    setError(null);
    try {
      const filteredRecipes = await fetchRecipesByName(query);
      setRecipes(filteredRecipes);
    } catch (err) {
      setError("No recipes found.");
      setRecipes([]);
    }
    setLoading(false);
  };

  const handleAddToCollection = (recipeId: string) => {
    setPersonalCollection((prev) =>
      prev.includes(recipeId) ? prev : [...prev, recipeId]
    );
  };

  return (
    <>
      <NavBar className="NavCard" />
      <div className="home-container">
        <h1>The Solar Recipe Collection</h1>

        <SearchBar onSearch={handleSearch} />

        {loading && <p>Loading recipes...</p>}
        {error && <p className="error">{error}</p>}

        <div className="recipe-container">
          <div className="recipe-list">
            {recipes.length > 0 ? (
              recipes.map((recipe) => (
                <RecipeCard
                  key={recipe.id}
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
