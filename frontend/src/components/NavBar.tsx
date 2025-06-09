import Light_Dark_Button from "./Light-Dark-Button";
import "../CSS/themes.css";

interface NavBarButtons {
  className: string;
  itemButtons?: [];
  onClick?: () => void;
}

const NavBar = (button: NavBarButtons) => {
  return (
    <>
      <aside className={button.className}>
        <img src="../src/Images/SolarIcon.png" alt="logo" />
        <Light_Dark_Button />
      </aside>
    </>
  );
};

export default NavBar;
