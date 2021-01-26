import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <header className="Navbar">
           <ul>
               <li><Link to="/" style={{ textDecoration: 'none', color: 'white' }}>HOME</Link></li>
               <li><Link to="/history" style={{ textDecoration: 'none', color: 'white' }}>HISTORY</Link></li>
           </ul>
            </header>
    )
}

export default Navbar
