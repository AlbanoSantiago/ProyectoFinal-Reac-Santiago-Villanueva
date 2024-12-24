import CartWidget from "./CartWidget"
import tigerLogo from "../assets/tigerlogo.png"
import { Link } from "react-router-dom"
import "./navbar.scss"

const NavBar = () => {
  return (
    <nav className="navbar">

        <Link to="/" className="brand">
            <img src={tigerLogo} alt=""/>
            <p className="brand-name">LutaMania</p>
            
        </Link>

        <ul className="categories">
            <Link to="/category/Vestuario Calle">Vestuario Calle</Link>
            <Link to="/category/Vestuario Entrenamiento">Vestuario Entrenamiento</Link>
            <Link to="/category/Equipo de Protección">Equipo de Protección</Link>
        </ul>
        <CartWidget />
    </nav>
  )
}

export default NavBar