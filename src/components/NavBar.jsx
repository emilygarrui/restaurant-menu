import React from 'react'
import { NavLink } from 'react-router-dom'


export default function NavBar() {
return (
<nav className="nav">
<div className="nav-inner">
<h1 className="brand">My Restaurant</h1>
<div className="links">
<NavLink to="/" end className={({isActive}) => isActive? 'active' : ''}>Home</NavLink>
<NavLink to="/categories" className={({isActive}) => isActive? 'active' : ''}>Categories</NavLink>
</div>
</div>
</nav>
)
}