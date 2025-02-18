import NavBar from "../src/components/NavBar";
import CardTemplate from "../src/components/cardTemplate.tsx";
import { useNavigate } from "react-router-dom";

const GuestPage = () => {
  const navigate = useNavigate();
  const text =
    "Solar Recipe's, a place where you can create, save, and browse the recipes of others.";
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
        <button onClick={() => navigate("/auth")}>Get Started</button>
      </div>
    </>
  );
};
export default GuestPage;
