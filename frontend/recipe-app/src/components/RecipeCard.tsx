import React from "react";

interface RecipeCardProps {
  recipe: { id: number; name: string; image: string; ingredients: string[] };
  searchQuery: string;
  onAddToCollection: (recipeId: number) => void;
}

const RecipeCard: React.FC<RecipeCardProps> = ({
  recipe,
  searchQuery,
  onAddToCollection,
}) => {
  const isVisible =
    recipe.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    recipe.ingredients.some((ingredient) =>
      ingredient.toLowerCase().includes(searchQuery.toLowerCase())
    );
  return isVisible ? (
    <div className="recipe-card">
      <h3>{recipe.name}</h3>
      <button onClick={() => onAddToCollection(recipe.id)}>
        Add to Collection
      </button>
    </div>
  ) : null; // If it doesn't match, return null (hides the card)
};
export default RecipeCard;
