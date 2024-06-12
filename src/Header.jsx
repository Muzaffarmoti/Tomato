import { Link } from 'react-router-dom';
import About from './About';
import './Header.css';
import Home from './Home';
import Contact from './Contact';




function Header() {
  return (
    <header className="header">
        
    <nav className="nav">
        <ul className="nav-list">
        <li className="nav-item"><Link to="/Home">Home</Link></li>
                    <li className="nav-item"><Link to="/About">About Us</Link></li>
                    <li className="nav-item"><Link to="/Contact">Contact Us</Link></li>
                    <li className="nav-item"><Link to="/temperature">Temperature</Link></li>
                    <li className="nav-item"><Link to="/logout">Log Out</Link></li>
        </ul>
    </nav>
</header>
  )
}

export default Header