import "./App.css";
import Toggle from "./component/Toggle";
import Modal from "./component/Modal";
import Animate from "./Animate";
import styled from "styled-components";

const ComponentWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  & + & {
    margin-top: 40px;
  }
`;

function App() {
  return (
    <div className="App">
      <ComponentWrapper>
        <Toggle />
      </ComponentWrapper>
      <ComponentWrapper>
        <Modal />
      </ComponentWrapper>
      {/* <Animate /> */}
    </div>
  );
}

export default App;
