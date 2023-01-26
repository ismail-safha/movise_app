import { useContext } from "react";
import { createContext, useReducer, useEffect } from "react";

import { reducer } from "./reducer";
//  use hock useReduser
const initialState = {
  watchlist: localStorage.getItem("watchlist")
    ? JSON.parse(localStorage.getItem("watchlist"))
    : [],
  watched: localStorage.getItem("watched")
    ? JSON.parse(localStorage.getItem("watched"))
    : [],
};
export const GlobalContext = createContext(initialState);
const ContextProvider = ({ children }) => {
  //  add stite use useRedioser
  const [state, dispatch] = useReducer(reducer, initialState);
  useEffect(() => {
    localStorage.setItem("watchlist", JSON.stringify(state.watchlist));
    localStorage.setItem("watched", JSON.stringify(state.watched));
  }, [state]);
  return (
    <GlobalContext.Provider
      value={{
        watchlist: state.watchlist,
        watched: state.watched,
        MoviesDispatch: dispatch,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
export default ContextProvider;
// add custom hock to  get data from contextAPI
export const useMovieContext = () => {
  return useContext(GlobalContext);
};
