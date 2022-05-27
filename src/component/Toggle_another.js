import styled, { css, keyframes } from "styled-components";
import { useState } from "react";

const ToggleContainer = styled.label`
  display: inline-block;
  cursor: pointer;
  user-select: none; //안쪽에서 드래그 되는 현상 방지
`;

const ToggleSwitch = styled.div`
  width: 64px;
  height: 30px;
  padding: 2px;
  box-sizing: border-box;
  border-radius: 15px;
  background-color: #ccc;
  transition: background-color 0.2s ease-out;

  &::after {
    content: "";
    position: relative;
    left: 0;
    display: block;
    width: 26px;
    height: 26px;
    border-radius: 50%;
    background-color: white;
    transition: left 0.2s ease-out;
  }
`;

const ToggleInput = styled.input`
  display: none;

  &:checked + div {
    background-color: lightgreen;
  }

  &:checked + div::after {
    left: calc(100% - 26px);
  }

  &:disabled + div {
    opacity: 0.7;
    cursor: not-allowed;
  }
`;

const ToggleAnother = ({ name, on = false, disabled, onChange, ...props }) => {
  const [checked, setState] = useState(on);

  const setToggle = () => {
    setState(checked => !checked);
  };

  const handleChange = e => {
    setToggle();
    // onChange();
  };

  return (
    <ToggleContainer {...props}>
      <ToggleInput
        type="checkbox"
        name={name}
        checked={checked}
        disabled={disabled}
        onChange={handleChange}
        style={{ display: "none" }}
      />
      <ToggleSwitch />
    </ToggleContainer>
  );
};

export default ToggleAnother;
