import axios from "axios";
import { createContext, useContext, useEffect, useReducer } from "react";
console.log(localStorage.getItem('favs'));
export const dentistsInitialState = {theme: "light", data: [], dentist: {}, favs:JSON.parse(localStorage.getItem('favs'))  || []}

export const ContextGlobal = createContext();

const apiUrl = 'https://jsonplaceholder.typicode.com/users';

const dentistsReducer = (state, action) => {
  switch(action.type){
    case 'CHANGE_THEME' :
      return {theme: action.payload === state.theme ?  "light" : "dark", data: state.data, dentist: state.dentist}
    case 'GET_LIST' :
        return {theme: state.theme, data:  action.payload, dentist: state.dentist}
    case 'GET_DENTIST':
        return {theme: state.theme, data: state.data, dentist: action.payload}
    case 'ADD_FAV' :
          return {theme: state.theme, data: state.data, dentist: state.dentist,favs: [...state.favs, action.payload]}
    default:
        throw new Error()
  }
}


export const ContextProvider = ({ children }) => {
  
  const [dentistsStates, dentistsDispatch] = useReducer(dentistsReducer, dentistsInitialState)

  useEffect(() => {
    axios(apiUrl)
    .then((res) => dentistsDispatch({type: 'GET_LIST', payload: res.data}));
  }, []);

  return (
    <ContextGlobal.Provider value={{
        dentistsStates, dentistsDispatch
    }}>
      {children}
    </ContextGlobal.Provider>
  );
};


export default ContextGlobal;

export const useGlobalContext = () => useContext(ContextGlobal)
