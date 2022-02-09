import React, { useState } from "react";
import styled, { css, keyframes } from "styled-components";

const ToggleBlock = styled.div`
  display: flex;
  align-items: center;
  width: 80px;
  border-radius: 20px;
  background-color: #bbb;
  cursor: pointer;
  margin-top: 20px;
  margin-bottom: 10px;

  ::before {
    content: "";
    display: flex;
    width: 0px;
    height: 2em;
    border-radius: 20px;
    background-color: #6741d9;
    position: absolute;
  }

  ::after {
    content: "";
    display: flex;
    border-radius: 1.5em;
    width: 1.5em;
    height: 1.5em;
    margin: 5px;
    background-color: white;
    transition: transform 0.3s ease-in-out;
  }

  ${({ toggle }) =>
    toggle &&
    css`
      ::before {
        width: 80px;
        transition: width 0.3s ease-in;
      }
      ::after {
        transform: translateX(45px);
      }
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
        {/* <ToggleCircle></ToggleCircle> */}
      </ToggleBlock>
      <div>Toggle Switch {toggle ? "ON" : "OFF"}</div>
    </>
  );
}

export default Toggle;
