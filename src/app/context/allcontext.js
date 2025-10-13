"use client"

import { createContext, useContext, useState } from "react";
const AllContext = createContext();

export const AllContextProvider = ({children}) => {
    const [toggleNavbar, setToggleNavbar] = useState(false);

    const toggleMobileNavbarFunction = () => setToggleNavbar((prev) => !prev)

    return (
        <AllContext.Provider 
            value={{
                toggleNavbar,
                toggleMobileNavbarFunction
            }}
        >
            {children}
        </AllContext.Provider>
    )
};

export const useAllContext = () => {
  const context = useContext(AllContext);

  if (!context) {
    throw new Error("useModal must be used within a ModalProvider");
  }
  return context;
};
