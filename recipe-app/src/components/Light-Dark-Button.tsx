import React, { ChangeEvent, useState } from "react";
import styled from "styled-components";
import { useTheme } from "./ThemeContext";

const ToggleButton: React.FC = () => {
  const [switchSate, setSwitchState] = useState(true);
  const { toggleTheme } = useTheme();

  function handleOnchange(e: ChangeEvent<HTMLInputElement>) {
    console.log("--", e.target.checked);
    setSwitchState(!switchSate);
  }

  return (
    <>
      <StyledLabel htmlFor="checkbox" checked={switchSate}>
        <input
          onClick={toggleTheme}
          onChange={handleOnchange}
          checked={switchSate}
          id="checkbox"
          type="checkbox"
        />
      </StyledLabel>
    </>
  );
};

const StyledLabel = styled.label<{ checked: boolean }>`
  cursor: pointer;
  text-indent: -9999px;
  width: 80px;
  height: 40px;
  display: block;
  background-color: ${({ checked }) => (checked ? "#00FFFF" : "#3A3A3A")};
  border-radius: 100px;
  position: relative;
  top: 15px;
  bottom 15px;
  &:after {
    content: "";
    position: absolute;
    left: ${({ checked }) => (checked ? "14px" : "calc(55% )")};
    top: 8px;
    width: 25px;
    height: 25px;
    background: #fff;
    border-radius: 90px;
    transition: 0.3s;
  }
`;

export default ToggleButton;
