import React, { useContext } from "react";
import { firstName, lastName } from "./MainComp";

const CompC = () => {
  const first = useContext(firstName);
  const second = useContext(lastName);

  return (
    <h1>
      my "firstName" is {first} and the "lastName" is {second}
    </h1>
  );
};

export default CompC;
