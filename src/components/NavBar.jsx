import CartWidget from "./CartWidget"
import tigerLogo from "../assets/tigerlogo.png"
import { NavLink, Link, useNavigate } from "react-router-dom"

import "./navbar.scss"

const NavBar = () => {

  const navigate = useNavigate()

  return (
    <nav className="navbar">

      <button className="botton" onClick={ () => navigate(-1) }>Ir para atras</button>

        <Link to="/" className="brand">
            <img src={tigerLogo} alt=""/>
            <p className="brand-name">LutaMania</p>
            
        </Link>
 
        <ul className="categories">
            <NavLink to="/category/vestuariocalle" className={ ( { isActive } ) => isActive ? "category-active" : "category"}>Vestuario Calle</NavLink>
            <NavLink to="/category/vestuarioentrenamiento" className={ ( { isActive } ) => isActive ? "category-active" : "category"}>Vestuario Entrenamiento</NavLink>
            <NavLink to="/category/equipoproteccion" className={ ( { isActive } ) => isActive ? "category-active" : "category"}>Equipo de Protección</NavLink>
        </ul>

        

        <CartWidget />
    </nav>
  )
}

export default NavBar