import React, { useState, useEffect } from "react";
import NavBar from "../src/components/NavBar";
import SearchBar from "../src/components/SearchBar";
import RecipeCard from "../src/components/RecipeCard";
import RecipeInfo from "../src/components/RecipeInfo";
import { fetchRecipesByName } from "../src/api";
import { Recipe } from "../src/components/types";
import "../src/CSS/AuthHome.css";

const HomePage: React.FC = () => {
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [activeView, setActiveView] = useState<"search"|"account"|"saved"|"premium">("search"); // "all" or "personal"
  const [personalCollection, setPersonalCollection] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [showRecipe, setShowRecipe] = useState(null as Recipe | null);

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

  const showRecipeDetails = (recipeId: string) => {
    const recipe = recipes.find((r) => r.id === recipeId);
    if (recipe) {
      setShowRecipe(recipe);
    } else {
      setError("Recipe not found.");
    }
  }
    
    

  const handleAddToCollection = (recipeId: string) => {
    setPersonalCollection((prev) =>
      prev.includes(recipeId) ? prev : [...prev, recipeId]
    );
  };

  return (
    <>
    <div className="auth-main">
      <NavBar className="NavCard" onNavClick={setActiveView}/>
      <div className="home-container">
        {activeView === "search" && (
          <>
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
                  onShowDetails={showRecipeDetails}
                />
               ))
              ) : (
              <p>No recipes found</p>
              )}

            </div>
          </div>
        </>
        )}
        {activeView === "account" && (
          <div className="account-view">
            <h1>Account</h1>
            <p>Manage your account settings here.</p>
            {/* Add account management features here */}
          </div>
        )}
        {activeView === "saved" && (
          <div className="saved-view">
            <h1>Your Saved Recipes</h1>
            {personalCollection.length > 0 ? (
              <div className="recipe-list">
                {personalCollection.map((recipeId) => {
                  const recipe = recipes.find((r) => r.id === recipeId);
                  return (
                    recipe && (
                      <RecipeCard
                        key={recipe.id}
                        recipe={recipe}
                        onAddToCollection={handleAddToCollection}
                        onShowDetails={showRecipeDetails}
                      />
                    )
                  );
                })}
              </div>
            ) : (
              <p>No saved recipes</p>
            )}
          </div>
        )}
        {activeView === "premium" && (
          <div className="premium-view">
            <h1>Go Premium</h1>
            <p>Upgrade to premium for exclusive features!</p>
            {/* Add premium features here */}
          </div>
        )}
      </div>
    </div>
      {showRecipe && (
  <>
    <div className="recipe-info-overlay" onClick={() => setShowRecipe(null)} />
    <RecipeInfo recipe={showRecipe} onClose={() => setShowRecipe(null)} />
  </>
)}
    </>
  );
};

export default HomePage;
