import React from 'react'
import { Link , NavLink } from 'react-router-dom'
import "./Navbar.css"

const Navbar = () => {
  return (
    <div>
        <ul>
            <li>
                {/* Never use anchor tag because it reloads the whole page */}
                {/* Navlink ka andr byDefault aik active class mil jate ha jise pata chalta ha ka ap kis route pr hn
                Navlink ka andr isActive name ka object hota ha , app jis route pr hotn hn wo active mark ho jata ha  */}
                <NavLink to="/" className={({isActive})=> isActive ? "active-link" : ""}>
                Home
                </NavLink>
            </li>
            <li>
                <NavLink to="/about" className={({isActive})=> isActive ? "active-link" : ""}>
                About
                </NavLink>
            </li>
            <li>
                <NavLink to="/dashboard" className={({isActive})=> isActive ? "active-link" : ""}>
                Dashboard
                </NavLink>
            </li>
        </ul>
    </div>
  )
}

export default Navbar