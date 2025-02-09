import React from "react";

interface Card {
  className: string;
  Items?: [];
  onClick?: () => void;
}

const cardTemplate = (card: Card) => {
  return (
    <>
      <div className={card.className}></div>
    </>
  );
};

export default cardTemplate;
