import React from "react";


const Form = ({handleSubmit, setAskingP}) => {
  //Aqui deberan implementar el form completo con sus validaciones

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label >Ingrese su nombre</label>
        <input type='text' onBlur={(e) => setAskingP((state) =>({...state, name: e.target.value}))}/>
        <label >Ingrese su correo electrónico</label>
        <input type='text' onBlur={(e) => setAskingP((state) =>({...state, email: e.target.value}))}/>
        <button>enviar</button>
      </form>
    </div>
  );
};

export default Form;