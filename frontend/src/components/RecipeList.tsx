import { useState } from "react";
import RecipeCard from "./RecipeCard";
import { Recipe } from "./types"; // Adjust the import path as necessary

interface RecipeListProps {
  allRecipes: Recipe[];
  handleAddToCollection: (recipeId: string) => void;
  onShowDetails?: (id: string) => void;
  // onShowDetails is optional and can be used to show more details about the recipe
}

const RecipeList: React.FC<RecipeListProps> =({ allRecipes, handleAddToCollection }) => {
  const [searchQuery, setSearchQuery] = useState("");

  // Filter recipes based on search query (name or ingredients)
  const filteredRecipes = allRecipes.filter(
    (recipe) =>
      recipe.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      recipe.ingredients.some((ingredient) =>
        ingredient.toLowerCase().includes(searchQuery.toLowerCase())
      )
  );

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
        {filteredRecipes.length > 0 ? (
          filteredRecipes.map((recipe) => (
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
  );
};

export default RecipeList;
