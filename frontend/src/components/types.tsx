export interface Recipe {
  id: string; // Standardized ID
  name: string;
  image: string;
  ingredients: string[];
  instructions: string;
}
export interface User {
  username: string;
  email: string;
  subscriptionStatus: "free" | "premium";
}
