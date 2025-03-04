import axios from "axios";
import { Recipe } from "./components/types";

const API_URL = "https://www.themealdb.com/api/json/v1/1/search.php?s=";

export const fetchRecipesByName = async (query: string): Promise<Recipe[]> => {
  try {
    const response = await axios.get(`${API_URL}${query}`);
    const meals = response.data.meals;

    if (!meals) return [];

    return meals.map((meal: any) => ({
      id: meal.idMeal, // Convert idMeal to id
      name: meal.strMeal, // Convert strMeal to name
      image: meal.strMealThumb, // Convert strMealThumb to image
      ingredients: getIngredients(meal), // Extract ingredients dynamically
      instructions: meal.strInstructions,
    }));
  } catch (error) {
    console.error("Error fetching recipes:", error);
    return [];
  }
};

// Helper function to extract ingredients dynamically
const getIngredients = (meal: any): string[] => {
  const ingredients: string[] = [];
  for (let i = 1; i <= 20; i++) {
    const ingredient = meal[`strIngredient${i}`];
    if (ingredient) {
      ingredients.push(ingredient);
    }
  }
  return ingredients;
};
