import React from "react";

interface Recipes {
  id: number;
  name: string;
  image?: string;
  ingredients: string[];
  instructions?: string;
}
interface RecipeCardProps {
  recipe: Recipes;
  onAddToCollection: (recipeId: number) => void;
}

const RecipeCard: React.FC<RecipeCardProps> = ({
  recipe,
  onAddToCollection,
}) => {
  return (
    <div className="recipe-card">
      <img src={recipe.image} alt={recipe.name} className="recipe-image" />
      <h2>{recipe.name}</h2>
      <h3>Ingredients:</h3>
      <ul>
        {recipe.ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>
      <h3>Instructions:</h3>
      <p>{recipe.instructions}</p>
      <button onClick={() => onAddToCollection(recipe.id)}>
        Add to My Collection
      </button>
    </div>
  );
};
export default RecipeCard;
