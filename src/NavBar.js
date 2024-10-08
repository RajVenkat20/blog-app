// This file is created outside the 'pages' folder because it is essentially not a page
import { Link, useNavigate } from 'react-router-dom';
import { getAuth, signOut } from 'firebase/auth';
import icon from './images/Raj.jpg';
import useUser from './hooks/useUser';

const NavBar = () => {
    const { user } = useUser();
    const navigate = useNavigate();

    return (
        <nav>
            <div className="nav-container">
                {/* Add the image on the left */}
                <div className="nav-left">
                    <Link to="/">
                        <img src={icon} alt="Raj Venkat Reddy Mavuram" className="nav-img" />
                    </Link>
                </div>
                
                {/* Navigation links */}
                <ul className="nav-right">
                    <li>
                        <Link className="menuOptions" to="/">About</Link>
                    </li>
                    <li>
                        <Link className="menuOptions" to="/blog">Blog</Link>
                    </li>
                    <li>
                        <Link className="menuOptions" to="/articles">Articles</Link>
                    </li>
                </ul>
                <div className="nav-right">
                    {user
                        ? <button className="btnAnimation" onClick={() => {
                            signOut(getAuth());
                        }}>Log Out</button>
                        : <button className="btnAnimation" onClick={() => {
                            navigate('/login');
                        }}>Log In</button>}
                </div>
            </div>
        </nav>
    );
}

export default NavBar;