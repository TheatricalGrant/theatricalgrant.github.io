import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import "./Header.css"

export const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav>
            <h1 className='title'>Grants Portfolio</h1>
            <h1 className='titleSecond'>Grant</h1>
            <div className='menu' onClick={()=> {
                setMenuOpen(!menuOpen)
            }}>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <ul className={menuOpen ? "open" : ""}>
                <li><NavLink to='/projects'>Projects</NavLink></li> 
                <li><NavLink to='/about'>About</NavLink></li>
            </ul>
        </nav>
    )
}

export default Header