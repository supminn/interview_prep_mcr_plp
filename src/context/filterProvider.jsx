import { createContext, useContext, useReducer } from "react";
import { initialState, reducer } from "./filterReducer";

const FilterContext = createContext();

export const FilterProvider = ({ children }) => {
  const [filter, dispatch] = useReducer(reducer, initialState);
  return (
    <FilterContext.Provider value={{ filter, dispatch }}>
      {children}
    </FilterContext.Provider>
  );
};

export const useFilter = () => useContext(FilterContext);
