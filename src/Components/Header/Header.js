import React from 'react'
import './header.css'
import {Link} from 'react-router-dom'
const Header = () => {
  return (
    <div className="div_conatiner">
        <nav className="Nav_conatiner">
            <div className='logo_conatiner'>
                <h4>React App</h4>
            </div>
            <ul className="list-nav">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/About">About</Link></li>
                <li><Link to="/section">Sections</Link></li>
                <li><Link to="/">Product</Link></li>
                <li><Link to="/conatct">Conatct</Link></li>
            </ul>
        </nav>
    </div>
  )
}

export default Header