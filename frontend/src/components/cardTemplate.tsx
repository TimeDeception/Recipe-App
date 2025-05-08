import { useNavigate } from "react-router-dom";

interface Card {
  CardStyle: string;
  idName: string;
  isHeading?: boolean;
  text?: string;
  Items?: [];
  //onClick?: () => null;
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
        <p>{card.text}</p>
        <button onClick={() => navigate("/auth")}>Login or Register</button>
      </div>
    );
  }
};
//const handleEvent = () => {};
export default cardTemplate;
