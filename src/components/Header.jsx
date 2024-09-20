import logo from "../assets/images/logo.svg"
import { NavLink } from "react-router-dom";
import "../sass/hearder.scss"

const Header = () => {
    return (
        <header className="header">
            <img src={logo} alt="logo kasa" className="headerLogo" />
            <ul>
                <NavLink to="/" className={({ isActive }) => (isActive ? "underline" : "")}>
                    <li>Accueil</li></NavLink>
                <NavLink to={"About"} className={({ isActive }) => (isActive ? "underline" : "")}>
                    <li>A Propos</li></NavLink>
            </ul>
        </header>
    );
};

export default Header;