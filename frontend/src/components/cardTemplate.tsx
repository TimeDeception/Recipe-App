import { ReactNode } from "react";
import { useNavigate } from "react-router-dom";

interface Card {
  CardStyle: string;
  idName: string;
  isHeading?: boolean;
  text?: string;
  imgSrc?: string;
  Items?: [];
}

const cardTemplate = (card: Card) => {
  const navigate = useNavigate();
  if (card.isHeading == true) {
    return (
      <div className={card.CardStyle} id={card.idName}>
        <h1>{card.text}</h1>
      </div>
    );
  } else {
    return (
      <div className={card.CardStyle} id={card.idName}>
        {card.imgSrc && <img src={card.imgSrc} alt={typeof card.text === "string" ? card.text : "Meal"} className= "meal-img" />}
        <div>{card.text}</div>
        <button onClick={() => navigate("/auth")}>Login or Register</button>
      </div>
    );
  }
};
//const handleEvent = () => {};
export default cardTemplate;
