import React, { useState } from "react";
import styled, { css } from "styled-components";

const AutoCompleteWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 35%;
  border: 1px solid #ddd;
  border-radius: 15px;
  padding: 10px;
  box-sizing: border-box;
`;

const AutoCompleteInput = styled.input`
  width: 100%;
  height: 20px;
  border: 0;
  outline: none;
  font-size: 1em;
`;

const AutoCompleteList = styled.div`
  width: 100%;
  border: 1px solid black;
`;

function AutoComplete() {
  const history = [
    { id: 1, content: "auto" },
    { id: 2, content: "autoComplete" },
    { id: 3, content: "vintage" },
    { id: 4, content: "modal" },
    { id: 5, content: "refurbished" },
    { id: 6, content: "rustic" },
  ];
  const [list, setlist] = useState([]);
  const [inputs, setInputs] = useState("");

  const onChange = (e) => {
    const inputValue = e.target.value;
    setInputs(inputValue);
    setlist(history.filter((h) => h.content.includes(inputValue)));
  };

  return (
    <AutoCompleteWrapper>
      <AutoCompleteInput onChange={onChange} />
      <AutoCompleteList />
    </AutoCompleteWrapper>
  );
}

export default AutoComplete;
