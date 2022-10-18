import React, { createContext } from "react";
import CompA from "./CompA";

const firstName = createContext();
const lastName = createContext();

const MainComp = () => {
  return (
    <>
      <h1>Use Context Hook</h1>
      <firstName.Provider value={"keyur"}>
        <lastName.Provider value={"trivedi"}>
          <CompA />
        </lastName.Provider>
      </firstName.Provider>
    </>
  );
};

export default MainComp;
export { firstName, lastName };

// useContext() is way to manage state globally
// react useContext() Hook makes it easy to pass data throughout your app without manually passing down the tree
