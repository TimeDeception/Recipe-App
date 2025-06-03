import { useState, useEffect } from "react";
import CardTemplate from "../src/components/cardTemplate.tsx";
import "../src/CSS/GuestHome.css";

type Meal ={
  idMeal: string;
  strMeal: string;
  strMealThumb: string;
}

const GuestPage = () => {
  const [meals, setMeals] = useState<Meal[]>([]);

  const [currentIndex, setCurrentIndex] = useState(0);
  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? meals.length -1 : prev -1 ));
  };
  const handleNext = () => {
    setCurrentIndex((prev) => (prev === meals.length -1 ? 0 : prev + 1));
  };

  useEffect(()=>{
    const fetchRandomMeals = async () => {
      const mealPromises = Array.from({ length: 10 }, () => 
        fetch("https://www.themealdb.com/api/json/v1/1/random.php")
          .then(res => res.json()));
      const mealData = await Promise.all(mealPromises);
      const mealArray = mealData.map(result => result.meals && result.meals[0]).filter(Boolean);
      setMeals(mealArray);
    };
    fetchRandomMeals();
  }, []);
  const text =
    "Hello Friend, Welcome to Solar Recipe's. A website where you can save create and browse recipes from every culture on earth. This app is aiming to unite the people with a common love for food and to bring attention to the lifestyle known as Solar Punk. The life of a solar punk enthusiast promotes the harmony of both nature and technology to allow for the maximum enjoyment of life.";
  return (
    <> 
          <CardTemplate
          CardStyle="CardStyle"
          idName="Title"
          isHeading={true}
          text="Welcome to Solar Recipe's"
        />
      
      
     
      <CardTemplate
  CardStyle="CardStyle"
  idName="guestcard"
  text={
    <>
      {meals.length > 0 && (
        <div className="slideshow">
  <button className="slideshow-button prev" onClick={handlePrev}>&lt;</button>
  <img
    src={meals[currentIndex].strMealThumb}
    alt={meals[currentIndex].strMeal}
    className="slideshow-img"
  />
  <button className="slideshow-button next" onClick={handleNext}>&gt;</button>
  <div style={{ marginTop: "0.5rem", fontWeight: "bold" }}>
    {meals[currentIndex].strMeal}
  </div>
</div>
      )}
      <div className = "Ptext">{text}</div>
    </>
  }
/>
     
    </>
  );
};
export default GuestPage;
