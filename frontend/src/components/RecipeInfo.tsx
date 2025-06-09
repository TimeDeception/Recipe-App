import { Recipe } from "./types";

interface RecipeInfoProps {
    recipe: Recipe;
    onClose: () => void;
}

const listRecipeInfo: React.FC<RecipeInfoProps> =({recipe, onClose})=> {
    return (
        <>
            <div className="recipe-info">
                <h2>{recipe.name}</h2>
                <img src={recipe.image} alt={recipe.name} />
                <h3>Ingredients:</h3>
                <ul>
                    {recipe.ingredients.map((ingredient, index) => (
                        <li key={index}>{ingredient}</li>
                    ))}
                </ul>
                <h3>Instructions:</h3>
                <p>{recipe.instructions}</p>
                <button onClick={onClose}>Close</button>
            </div>
        </>
    )
}
export default listRecipeInfo;
// This component displays detailed information about a recipe, including its name, image, ingredients, and instructions.
// It also includes a button to close the information view.