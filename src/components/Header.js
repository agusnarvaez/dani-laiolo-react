import { NavLink } from 'react-router-dom'
import "../assets/styles/header.css"

function Header() {
    return (
        <header className="header">
            <h1>DANIELA LAIOLO</h1>
            <ul>
                <li><NavLink className={({ isActive }) => (isActive ? "navLink active" : "navLink")} to='/' exact="true">Inicio</NavLink></li>
                <li><NavLink to='/projects/list' >Proyectos</NavLink></li>
                <li><NavLink to='/about'>Sobre Mi</NavLink></li>
                <li><NavLink to='/contact' >Contacto</NavLink></li>
            </ul>
        </header>
    )
}

export default Header;