import React, { useState } from 'react'
import Form from '../Components/Form'
import { validations } from './utils/validations'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Contact = () => {

  const [askingP, setAskingP] = useState({
    name: '',
    email: ''
  })

  const [show, setShow] = useState(false)
  const [error, setError] = useState(false)
  
  const handleSubmit = (e) => {
    e.preventDefault()
    if(validations.nameV(askingP.name) && validations.emailV(askingP.email)){
      
      setShow(true)
      setError(false)
    }
    else{
      setError(true)
      setShow(false)
    }
  }
  return (
    <div>
      <h2>Want to know more?</h2>
      <p>Send us your questions and we will contact you</p>
      <Form handleSubmit={handleSubmit} setAskingP={setAskingP}/>
      {show && <p>Gracias {askingP.name}, te contactaremos cuando antes vía mail.</p>}
      {error && <p>Por favor verifique su información nuevamente.</p>}
    </div>
  )
}

export default Contact

/* const [persona, setPersona] = useState({
    nombre: '',
    apellido: '',
    edad: ''
  })

  const [show, setShow] = useState(false)
  const [error, setError] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if(persona.nombre.trim().length > 3 && persona.apellido.trim().length > 6){
      setShow(true)
      setError(false)
    }else{
      setError(true)
      setShow(false)
    }
  }
  return (
    <>
      <h1>PARCIAL FRONT 3</h1>
      <div className="container">
        <Form handleSubmit={handleSubmit} setPersona={setPersona}/>
      {show && <Card persona={persona}/>}
      {error && <p>Por favor chequea que la información sea correcta</p>}
      </div>
      
    </> */