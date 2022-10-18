import React, { useRef, useState, useEffect } from "react";

const UseRefHook = () => {
  const [name, setName] = useState("");
  const render = useRef(0);

  useEffect(() => {
    render.current = render.current + 1;
  });

  return (
    <>
      <h1>UseRefHook</h1>
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <h1>my name is {name}</h1>
      <h2>i render {render.current} times</h2>
    </>
  );
};

export default UseRefHook;

// the useRef() Hook allows you to persist values between renders
// it can be used to store mutable value that does not cause re-render when updated
// it can be used to accesss DOM element directly
