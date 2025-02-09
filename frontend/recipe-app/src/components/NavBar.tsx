import Light_Dark_Button from "./Light-Dark-Button";

interface NavBarButtons {
  className: string;
  itemButtons?: [];
  onClick?: () => void;
}

const NavBar = (button: NavBarButtons) => {
  return (
    <>
      <aside className={button.className}>
        <img src="" alt="logo" />
        <Light_Dark_Button />
      </aside>
    </>
  );
};

export default NavBar;
