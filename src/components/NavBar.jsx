import CartWidget from "./CartWidget"
import tigerLogo from "../assets/tigerlogo.png"
import "./navbar.scss"

const NavBar = () => {
  return (
    <nav className="navbar">

        <div className="brand">
            <img src={tigerLogo} alt=""/>
            <p className="brand-name">LutaMania</p>
            
        </div>

        <ul className="categories">
            <li>Vestuario Calle</li>
            <li>Vestuario Entrenamiento</li>
            <li>Equipo de Protección</li>
        </ul>
        <CartWidget />
    </nav>
  )
}

export default NavBar