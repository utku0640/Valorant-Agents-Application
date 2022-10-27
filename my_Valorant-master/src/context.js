import { useContext, useEffect, useReducer } from "react";
import React from "react";
import reducer from "./reducer";
import dataCame from "./data";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  let url = "https://valorant-api.com/v1/agents";

  const fetchData = async () => {
    dispatch({ type: "LOADING" });
    const response = await fetch(url);
    const data = await response.json();
    dispatch({ type: "FETCH_DATA", payload: data.data });
    dispatch({ type: "LOADING_OUT" });
  };

  useEffect(() => {
    fetchData();
  }, []);

  const removeItem = (uuid) => {
    dispatch({ type: "REMOVE_ITEM", payload: uuid });
  };

  const initialState = {
    champCard: dataCame,
    loading: false,
  };
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <AppContext.Provider value={{ ...state, removeItem }}>
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
