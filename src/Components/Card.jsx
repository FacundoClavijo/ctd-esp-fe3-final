import { useEffect, useReducer } from "react";
import { Link, useLocation } from "react-router-dom";
import { routes } from "../Routes/utils/routes";
import { useGlobalContext } from "./utils/global.context";

const Card = ({ item }) => {
  
  const {dentistsDispatch} = useGlobalContext();

  const location = useLocation();
  const isFavsRoute = location.pathname === '/favs';

  
  useEffect(() => {
    localStorage.setItem('favs', JSON.stringify())
  }, [])
  
  return (
    <>
      <Link className="card" to={`${routes.detail}/${item.id}`}>
        <img src="./images/doctor.jpg" alt="dentist_photo" style={{ width: '150px' }} />
        <h1>{item.name}</h1>
        <h3>{item.username}</h3>
        <h3>{item.id}</h3>
      </Link>
      {!isFavsRoute && (<button onClick={() => dentistsDispatch({type: 'ADD_FAV', payload: item})} className="favButton">
          Add fav
        </button>)}
    </>
  );
};


export default Card;
