import { Link, NavLink, useLocation } from 'react-router-dom';
import './index.scss';
import Logo1 from '../../assets/images/FRENCHIE_LOGO.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faHome, faLocationDot, faUser } from '@fortawesome/free-solid-svg-icons';

const Sidebar = () => {
    const location = useLocation();

    return (
        <div className='nav-bar'>

            {location.pathname === '/' && (
                <Link className='logo' to='/'>
                    <img src={Logo1} alt="logo1" />
                </Link>
            )}
            <nav>
                <NavLink exact activeClassName="active" to="/">
                    <FontAwesomeIcon icon={faHome} color="#719192" />
                </NavLink>

                <NavLink exact activeClassName="active" className="about-link" to="/about">
                    <FontAwesomeIcon icon={faUser} color="#719192" />
                </NavLink>

                <NavLink exact activeClassName="active" className="location-link" to="/location">
                    <FontAwesomeIcon icon={faLocationDot} color="#719192" />
                </NavLink>

                <NavLink exact activeClassName="active" className="contact-link" to="/contact">
                    <FontAwesomeIcon icon={faEnvelope} color="#719192" />
                </NavLink>

            </nav>
        </div>
    );
};

export default Sidebar;
