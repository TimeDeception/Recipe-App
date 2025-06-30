import React from "react";


//Creates the interface for the RecipeCard component props
interface RecipeCardProps {
  recipe: { id: string; name: string; image: string; ingredients: string[] };
  searchQuery?: string;
  onAddToCollection: (recipeId: string) => void;
  onRemoveFromCollection: (recipeId: string) => void;
  isSaved: boolean;
  onShowDetails?: (id: string) => void;
  // onShowDetails is optional and can be used to show more details about the recipe
  // if needed in the future.
}
// The below component takes in the recipecardprop object and destructures it to get the recipe, searchQuery, and onAddToCollection function.
const RecipeCard: React.FC<RecipeCardProps> = ({
  recipe,
  searchQuery = "",
  onAddToCollection,
  onRemoveFromCollection,
  isSaved,
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
      <button title="Show Info" onClick={() => onShowDetails && onShowDetails(recipe.id)}>
       <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z" />
        </svg>
      </button>
      <button onClick={() => isSaved ? onRemoveFromCollection(recipe.id): onAddToCollection(recipe.id)}
        title={isSaved ? "Remove from Collection" : "Add to Collection"}>
          {isSaved ? (
            <svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z" />
            </svg>
          ) :(
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z" />
            </svg>
          )}
        

      </button>
    </div>
  ) : null;
};

export default RecipeCard;
