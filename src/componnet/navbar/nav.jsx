import './nav.css'
import { NavLink } from 'react-router-dom';

function Nav(){
    return <>
        <li className="navbar" >
            <NavLink to="/" className="nav-link"><ul>Home</ul></NavLink>
            <NavLink to="/service" className="nav-link"><ul>Service</ul></NavLink>
            <NavLink to="/projects" className="nav-link"><ul>Projects</ul></NavLink>
            <NavLink to="/skills" className="nav-link"><ul>Skills</ul></NavLink>
            
            
            
            
        </li>
    </>
}
export default Nav;