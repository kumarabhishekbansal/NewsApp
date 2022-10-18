import React from 'react'
import {NavLink} from 'react-router-dom'
import './style.css'
const Navbar = () => {
  return (
    <>
        <div className="navigation">
            <NavLink className="Loginn navlink"  to='/login'>Login</NavLink>
            <NavLink className="signupn navlink" to='/register'>Signup</NavLink>
        </div>
    </>
  )
}

export default Navbar