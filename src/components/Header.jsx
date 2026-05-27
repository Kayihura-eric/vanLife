import React from 'react';
import { Link, NavLink } from 'react-router-dom';
export default function Header(){
    const activeStyle = {
        textDecoration: "underline",
        fontWeight: "bold",
        color: "#161616"
    };
    return(
        <header>
            <Link className="logo" to="/">
                <h4>#VANLIFE</h4>
            </Link>
            <nav>
                <ul className="ul-items">
                    <li>
                        <NavLink to = "/host" className={({isActive})=> isActive? "active-link": null}>Host</NavLink>
                    </li>
                    <li>
                        <NavLink to="/about" className={({isActive})=> isActive? "active-link": null}>About</NavLink>
                    </li>
                    <li>
                        <NavLink to="/vans" className={({isActive})=> isActive? "active-link": null}>Vans</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    )
}