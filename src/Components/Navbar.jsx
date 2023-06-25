import React from 'react'
import { Link } from 'react-router-dom'
import { routes } from '../Routes/utils/routes'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {

  return (
    <nav>
      <ul className="navbar-nav mb-2 mb-sm-0">
        <li className={`nav-item`}>
          <Link className="nav-link" to={routes.home}>
            Home
          </Link>
          <Link className="nav-link" to={routes.contact}>
            Contact
          </Link>
          <Link className="nav-link" to={routes.favs}>
            Favs
          </Link>
        </li>
      </ul>
      {/* Aqui deberan agregar los liks correspondientes a las rutas definidas */}
      {/* Deberan implementar ademas la logica para cambiar de Theme con el button */}
      <button>Change theme</button>
    </nav>
  )
}

export default Navbar