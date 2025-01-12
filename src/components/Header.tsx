import react from 'react'
import { NavLink, Link } from 'react-router-dom'
import "./Header.css"

export const Header = () => {
    return (
        <nav>
            <h1 className='title'>Grants Portfolio</h1>
            <ul>
                <li><NavLink to='/about'>About</NavLink></li>
                <li><NavLink to='/projects'>Projects</NavLink></li> 
                <li><NavLink to='/resume'>Resume</NavLink></li> 
            </ul>
        </nav>
    )
}

export default Header