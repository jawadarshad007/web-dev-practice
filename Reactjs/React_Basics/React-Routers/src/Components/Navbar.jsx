import React from 'react'
import { Link , NavLink} from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
  return (
    <div>
    <ul style={{ color: 'white' }}>
        <li>
            {/* note: Link is used to navigate between routes without reloading the page. */}
            {/* <Link to="/">Home</Link> */}
            {/* <a href="/">Home</a> */}


           {/* note: In navlink isActive flag is available by default to check if the link is active or not. */}
            <NavLink to="/" className={({isActive})=>{
                return isActive? "active-link" : ""
            }}>
            Home</NavLink>

        </li>
        <li>
            <NavLink to="/about" className={({isActive})=>{
                return isActive? "active-link" : ""
            }}>About</NavLink>

        </li>
        <li>
            <NavLink to="/dashboard" className={({isActive})=>{
                return isActive? "active-link" : ""
            }}>Dashboard</NavLink>
        </li>
      </ul>
    </div>
  )
}

export default Navbar
