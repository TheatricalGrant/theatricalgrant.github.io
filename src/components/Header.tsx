import { NavLink } from 'react-router-dom'
import "./Header.css"

export const Header = () => {
    return (
        <nav>
            <h1 className='title'>Grants Portfolio</h1>
            <ul>
                <li><NavLink to='/projects'>Projects</NavLink></li> 
                <li><NavLink to='/about'>About</NavLink></li>
            </ul>
        </nav>
    )
}

export default Header