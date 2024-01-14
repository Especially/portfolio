import React from "react";
import { func, string } from "prop-types";
import styled from "styled-components";

const DarkModeSlider = styled.span`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: ${({ theme }) => theme.body};
  -webkit-transition: 0.4s;
  transition: 0.4s;
  border-radius: 34px;

  &:before {
    position: absolute;
    content: "";
    height: 26px;
    width: 26px;
    left: 4px;
    bottom: 4px;
    background-color: ${({ theme }) => theme.highlight};
    background-image: url(${({ theme }) => theme.icon});
    background-repeat: no-repeat;
    background-position: center center;
    background-size: 1rem;
    transition: 0.4s;
    border-radius: 50%;
  }
`;

const DarkModeSwitch = styled.label`
  position: absolute;
  display: block;
  width: 60px;
  height: 34px;
  right: 0;
  margin: 1rem;
  z-index: 1;
  & input {
    opacity: 0;
    width: 0;
    height: 0;
    &:checked + ${DarkModeSlider} {
      background-color: ${({ theme }) => theme.body};
    }
    &:focus + ${DarkModeSlider} {
      box-shadow: 0 0 1px #2196f3;
    }
    &:checked + ${DarkModeSlider}:before {
      transform: translateX(26px);
    }
  }
`;
const Toggle = ({ theme, toggleTheme }) => {
  return (
    <DarkModeSwitch>
      <input
        type="checkbox"
        onChange={toggleTheme}
        checked={theme === "dark"}
      />
      <DarkModeSlider />
    </DarkModeSwitch>
  );
};
Toggle.propTypes = {
  theme: string.isRequired,
  toggleTheme: func.isRequired,
};
export default Toggle;
