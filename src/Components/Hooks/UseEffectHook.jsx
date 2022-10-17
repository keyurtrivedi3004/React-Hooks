import React, { useState, useEffect } from "react";

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
