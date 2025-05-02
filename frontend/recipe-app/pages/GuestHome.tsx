import NavBar from "../src/components/NavBar";
import CardTemplate from "../src/components/cardTemplate.tsx";
import "../src/CSS/GuestHome.css";

const GuestPage = () => {
  const text =
    "Hello Friend, Welcome to Solar Recipe's. A website where you can save create and browse recipes from every culture on earth. This app is aiming to unite the people with a common love for food and to bring attention to the lifestyle known as Solar Punk, A way to live with nature while leaving behind the stress that is Capitalism and industrialism.";
  return (
    <>
      <NavBar className="NavCard" />
      <div className="GuestContent">
        <CardTemplate
          CardStyle="CardStyle"
          idName="Title"
          isHeading={true}
          text="Welcome to Solar Recipe's"
        />
        <CardTemplate CardStyle="CardStyle" idName="guestcard" text={text} />
      </div>
    </>
  );
};
export default GuestPage;
