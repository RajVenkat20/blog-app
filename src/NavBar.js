// This file is created outside the 'pages' folder because it is essentially not a page
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <nav>
            <ul>
                {/* Wrapping each component that we want to have the link behavior inside the Link component 
                    'to' property specifies where it needs to be routed on clicking the link*/}
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
        </nav>
    );
}

export default NavBar;