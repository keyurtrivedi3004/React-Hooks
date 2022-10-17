import React, { useState } from "react";

const UseStateHook = () => {
  const [count, setCount] = useState(4);
  console.log(count);
  return (
    <>
      <button onClick={() => setCount(count - 1)}>-</button>
      <span>{count}</span>
      <button onClick={() => setCount(count + 1)}>+</button>
    </>
  );
};

export default UseStateHook;
