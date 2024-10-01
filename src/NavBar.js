// This file is created outside the 'pages' folder because it is essentially not a page
import { Link } from 'react-router-dom';
import icon from './images/Raj.jpg';

const NavBar = () => {
    return (
        <nav>
            <div className="nav-container">
                {/* Add the image on the left */}
                <div className="nav-left">
                    <Link to="/">
                        <img src={icon} alt="Your Picture" className="nav-img" />
                    </Link>
                </div>
                
                {/* Navigation links */}
                <ul className="nav-right">
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/articles">Articles</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default NavBar;