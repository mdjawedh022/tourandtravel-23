import React, { useState } from 'react'
import "../styles/Navbar.css"
import { Link } from 'react-router-dom'
import {GiHamburgerMenu} from "react-icons/gi"
import {AiOutlineClose} from "react-icons/ai"
import { MenuItems } from './MenuItems'
const Navbar = () => {
  const [state,setState]=useState(false)

  const handleClick=()=>{
    setState({clicked:!state.clicked})
  }
  return (
    <div>
      <div className="navbarItems">
        <h1 className='navbar-logo'>TripInfo</h1>
        <div className="menu-icons" onClick={handleClick}>
        {state.clicked ? <AiOutlineClose className='i'/>:<GiHamburgerMenu className='i'/>}
        </div>
         <ul className={state.clicked?"nav-menu active":"nav-menu"}>
            {MenuItems.map((items,i)=>(
              <li key={i}>
              <Link to={items.url} className={items.cName}>
             {items.icons}
              {items.title}
              </Link>
              
          </li>
            ))}
           <button>Sign Up</button>

         </ul>
      </div>
    </div>
  )
}

export default Navbar
