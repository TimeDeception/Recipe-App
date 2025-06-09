import React from "react";

//Creates the interface for the RecipeCard component props
interface RecipeCardProps {
  recipe: { id: string; name: string; image: string; ingredients: string[] };
  searchQuery?: string;
  onAddToCollection: (recipeId: string) => void;
  onShowDetails?: (id: string) => void;
  // onShowDetails is optional and can be used to show more details about the recipe
  // if needed in the future.
}
// The below component takes in the recipecardprop object and destructures it to get the recipe, searchQuery, and onAddToCollection function.
const RecipeCard: React.FC<RecipeCardProps> = ({
  recipe,
  searchQuery = "",
  onAddToCollection,
  onShowDetails,
}) => {
  // Checks if the recipe name or any of its ingredients match the search query
  const isVisible =
    recipe.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    recipe.ingredients.some((ingredient) =>
      ingredient.toLowerCase().includes(searchQuery.toLowerCase())
    );
// If the recipe matches the search query, it will be visible, otherwise it will not be rendered.
  return isVisible ? (
    <div className="recipe-card">
      <img src={recipe.image} alt={recipe.name} />
      <h3>{recipe.name}</h3>
      <button onClick={() => onShowDetails && onShowDetails(recipe.id)}>Show Info</button>
      <button onClick={() => onAddToCollection(recipe.id)}>
        Add to Collection
      </button>
    </div>
  ) : null;
};

export default RecipeCard;
