import React from "react"
import { NavLink } from "react-router-dom";
const NavBar = () => {
    return(
        <>
            {/* <NavLink exact activeClassName="active_class" to="/about"> AboutUS </NavLink>
            <NavLink exact activeClassName="active_class" to="/contact"> ContactUS </NavLink> */}
            <ul>
                <li><NavLink exact activeClassName="active_class" to="/"> Home </NavLink></li>
                <li><NavLink exact activeClassName="active_class" to="/about"> AboutUS </NavLink></li>
                <li><NavLink exact activeClassName="active_class" to="/contact"> ContactUS </NavLink></li>
                <li><NavLink exact activeClassName="active_class" to="/contact/Name"> Name </NavLink></li>
            </ul>

        </>
    )
}
export default NavBar;