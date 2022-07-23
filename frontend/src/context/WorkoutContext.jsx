import { useReducer } from "react";
import { createContext } from "react";

export const WorkoutsContext = createContext();

export const WorkoutsContextProvider = ({ children }) => {
const[state,dispatch]=useReducer()

  return <WorkoutsContext.Provider value={}>{children}</WorkoutsContext.Provider>;
};
