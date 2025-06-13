import Light_Dark_Button from "./Light-Dark-Button";
import "../CSS/themes.css";

interface NavBarButtons {
  className: string;
  onNavClick: (view: "search" | "account" | "saved" | "premium") => void;
  itemButtons?: [];
  onClick?: () => void;
}

const NavBar = (button: NavBarButtons) => {
  return (
    <>
      <aside className={button.className}>
        <img src="../src/Images/SolarIcon.png" alt="logo" />
        <button onClick={() => button.onNavClick("account")}>Account</button>
        <button onClick={() => button.onNavClick("search")}>Search</button>
        <button onClick={() => button.onNavClick("saved")}>Saved</button>
        <button onClick={() => button.onNavClick("premium")}>GO Premium</button>
        <Light_Dark_Button />
      </aside>
    </>
  );
};

export default NavBar;
