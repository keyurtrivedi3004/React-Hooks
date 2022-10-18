import React, { useMemo, useState } from "react";

const UseMemo = () => {
  const [number, setNumber] = useState(0);
  const [dark, setDark] = useState(false);
  const doubleNumber = useMemo(() => {
    return slowFunction(number);
  }, [number]);
  const themeStyle = {
    backgroundColor: dark ? "black" : "white",
    color: dark ? "white" : "black",
  };

  return (
    <>
      <h1>UseMemo</h1>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(parseInt(e.target.value))}
      />
      <button onClick={() => setDark((prevDark) => !prevDark)}>
        Change Theme
      </button>
      <br />
      <br />
      <div style={themeStyle}>{doubleNumber}</div>
    </>
  );
};

function slowFunction(num) {
  console.log("calling slow function");
  for (let i = 0; i <= 1000000000; i++) {}
  return num * 2;
}

export default UseMemo;

// the react useMemo() Hook return memoized value
// useMemo() allows you to memoized expansive function so that you can avoid calling them on every render
// useMemo() will only recompute the memoized value when one of te input has changed
