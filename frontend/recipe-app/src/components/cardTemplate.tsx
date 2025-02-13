interface Card {
  CardStyle: string;
  idName: string;
  isHeading?: boolean;
  text?: string;
  Items?: [];
  onClick?: () => void;
}

const cardTemplate = (card: Card) => {
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
      </div>
    );
  }
};

export default cardTemplate;
