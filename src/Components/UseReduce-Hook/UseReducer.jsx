import React, { useReducer } from "react";
import styled from "styled-components";
import { BiPlusMedical } from "react-icons/bi";
import { FaMinus } from "react-icons/fa";

const initialState = 0;
const reducer = (state, action) => {
  console.log(state, action);
  if (action.type === "INCREMENT") {
    return state + 1;
  }
  if (action.type === "DECREMENT") {
    return state - 1;
  }
};

const UseReducer = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      <Wrapper>
        <div className="container">
          <button onClick={() => dispatch({ type: "DECREMENT" })}>
            <FaMinus className="icon minus_icon" />
          </button>
          <h1>{state}</h1>
          <button onClick={() => dispatch({ type: "INCREMENT" })}>
            <BiPlusMedical className="icon" />
          </button>
        </div>
      </Wrapper>
    </>
  );
};

export default UseReducer;

const Wrapper = styled.section`
  .container {
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 4.8rem;
  }
  .icon {
    font-size: 2rem;
  }
  h1 {
    font-size: 5.4rem;
    color: #2e86c1;
  }
`;
