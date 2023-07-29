import CartWidget from "../CartWidget/CartWidget"
import { Link, NavLink } from "react-router-dom"
import './NavBar.css'
const NavBar = () => {
    return (
        <header>
            <Link to={"/"}>
                <h1 className="titulo">NNN Indumentary</h1>
            </Link>

            <nav>
                <ul>
                    <li>
                        <NavLink className="navLink" to={"/"}>Home</NavLink>
                    </li>
                    <li>
                        <NavLink className="navLink" to={"/categoria/remeras"}>Remeras</NavLink>
                    </li>
                    <li>
                        <NavLink className="navLink" to={"/categoria/pantalones"}>Pantalones</NavLink>
                    </li>
                    <li>
                        <NavLink className="navLink" to={"/categoria/zapatillas"}>Zapatillas</NavLink>
                    </li>
                </ul>

            </nav>
            <CartWidget />

        </header>
    )
}

export default NavBar