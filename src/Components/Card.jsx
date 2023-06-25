import { useEffect, useReducer } from "react";
import { Link, useLocation } from "react-router-dom";
import { routes } from "../Routes/utils/routes";

const Card = ({ name, username, id, item }) => {
  
  const location = useLocation();
  const isFavsRoute = location.pathname === '/favs';

  const initialState = JSON.parse(localStorage.getItem('favs')) || []
  
  const addFav = (state, action) => {
    switch(action.type){
      case 'ADD_FAV' :
        return [...state, action.payload]
        case 'DELETE_FAV':
          return [action.payload] //hay que completar
          default:
            throw new Error()
          }
        }

  const [fav, dispatch] = useReducer(addFav,initialState)

  useEffect(() => {
    localStorage.setItem('favs', JSON.stringify(fav))
  }, [fav])
  
  return (
    <>
      <Link className="card" to={`${routes.detail}/${id}`}>
        <img src="./images/doctor.jpg" alt="" style={{ width: '150px' }} />
        <h1>{name}</h1>
        <h3>{username}</h3>
        <h3>{id}</h3>
        
      </Link>
      {!isFavsRoute && (
    <button onClick={() => dispatch({type: 'ADD_FAV', payload: item})} className="favButton">
      Add fav
    </button>
  )}
    </>
        
  );
};


export default Card;
