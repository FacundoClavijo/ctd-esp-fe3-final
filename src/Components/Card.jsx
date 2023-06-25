import React from "react";
import { Link } from "react-router-dom";
import { routes } from "../Routes/utils/routes";


const Card = ({ name, username, id }) => {

  const addFav = ()=>{
    // Aqui iria la logica para agregar la Card en el localStorage
  }

  return (
      <Link className="card" to={`${routes.detail}/${id}`}>
        <img src="./images/doctor.jpg" alt="" style={{ width: '150px' }} />
        <h1>{name}</h1>
        <h3>{username}</h3>
        <h3>{id}</h3>
        <button onClick={addFav} className="favButton">
          Add fav
        </button>
      </Link>
  );
};


export default Card;
