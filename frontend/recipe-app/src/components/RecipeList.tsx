import { useState } from "react";
import RecipeCard from "./RecipeCard";

const RecipeList = ({ allRecipes, handleAddToCollection }) => {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div>
      {/* Search Input */}
      <input
        type="text"
        placeholder="Search recipes..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />

      {/* Recipe List */}
      <div className="recipe-list">
        {allRecipes.length > 0 ? (
          allRecipes.map((recipe) => (
            <RecipeCard
              key={recipe.id}
              recipe={recipe}
              searchQuery={searchQuery} // Pass search term to each card
              onAddToCollection={handleAddToCollection}
            />
          ))
        ) : (
          <p>No recipes found</p>
        )}
      </div>
    </div>
  );
};

export default RecipeList;
