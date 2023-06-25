import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';


//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {
  const [dentist, setDentist] = useState('');

  const params = useParams();

  const urlDetail = `https://jsonplaceholder.typicode.com/users/${params.id}`;

  useEffect(() => {
    axios(urlDetail).then((res) => setDentist(res.data));
  }, [urlDetail]);


  return (
    <>
      <h1>Detail Dentist id </h1>
      <ul>
        <li>{dentist.name}</li>
        <li>{dentist.email}</li>
        <li>{dentist.phone}</li>
        <li>{dentist.website}</li>
      </ul>
      {/* aqui deberan renderizar la informacion en detalle de un user en especifico */}
      {/* Deberan mostrar el name - email - phone - website por cada user en especifico */}
    </>
  )
}

export default Detail