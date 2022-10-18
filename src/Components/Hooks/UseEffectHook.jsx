import React, { useState, useEffect, Component } from "react";

const UseEffectHook = () => {
  const [windowwidth, setWindowwidth] = useState(window.innerWidth);

  const handleResize = () => {
    setWindowwidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
  }, []);

  return <>{windowwidth}</>;
};

export default UseEffectHook;

// useEffect() Hook allows you to perform side effect in Component
// side effect like:- fetching data, directly updating the DOM and timers
