import React from 'react'
import NavItem from '../NavItem/NavItem'

import './NavItems.css'

const NavItems = (props) => {
    return(
        <ul className="nav-items">
            <NavItem link="/">shopping</NavItem>
            <NavItem link="/account">Account</NavItem>
        </ul>
    )
}

export default NavItems