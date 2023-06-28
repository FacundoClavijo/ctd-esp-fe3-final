import React from "react";
import Card from "../Components/Card";
import { useGlobalContext } from "../Components/utils/global.context";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Favs = () => {
  const {dentistsStates} = useGlobalContext();
  return (
    <>
      <h1>Dentists Favs</h1>
      <div className="card-grid">

      
      {dentistsStates.favs && dentistsStates.favs.length > 0 ? (
        <ul>
          {dentistsStates.favs.map((item) => (
            <li key={item.id}>
              <Card name={item.name} username={item.username} id={item.id} item={item}/>
            </li>
          ))}
        </ul>
      ) : <p>No tienes favoritos todavía</p>}
        
        {/* este componente debe consumir los destacados del localStorage */}
        {/* Deberan renderizar una Card por cada uno de ellos */}
      </div>
    </>
  );
};

export default Favs;
