import React, { useState } from "react";
import styled, { css } from "styled-components";

const ToggleBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 70px;
  padding: 5px;
  border-radius: 20px;
  background-color: #bbb;
  cursor: pointer;
  margin-top: 20px;
  margin-bottom: 10px;
  ${({ toggle }) =>
    toggle &&
    css`
      justify-content: flex-end;
      background-color: #6741d9;
    `}
`;

const ToggleCircle = styled.div`
  display: flex;
  border-radius: 1.5em;
  width: 1.5em;
  height: 1.5em;
  background-color: white;
`;

function Toggle() {
  const [toggle, setToggle] = useState(false);

  const onToggle = () => {
    setToggle((toggle) => !toggle);
  };

  return (
    <>
      <ToggleBlock onClick={onToggle} toggle={toggle}>
        <ToggleCircle></ToggleCircle>
      </ToggleBlock>
      <div>Toggle Switch {toggle ? "ON" : "OFF"}</div>
    </>
  );
}

export default Toggle;
