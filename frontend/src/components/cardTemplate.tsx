import { ReactNode } from "react";
import { useNavigate } from "react-router-dom";
import Light_Dark_Button from "./Light-Dark-Button.tsx";

interface Card {
  CardStyle: string;
  idName: string;
  isHeading?: boolean;
  text?: string | ReactNode;
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
        <div className="button-container">
        <button className="LoginOrRegisterBtn" onClick={() => navigate("/auth")}>Login or Register</button>
        <Light_Dark_Button />
        </div>
      </div>
    );
  }
};
//const handleEvent = () => {};
export default cardTemplate;
