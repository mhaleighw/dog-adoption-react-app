import { Link, NavLink } from 'react-router-dom'
import './index.scss';
import Logo1 from '../../assets/images/logo1.png'
import Logo2 from '../../assets/images/logo2.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faHome, faUser } from '@fortawesome/free-solid-svg-icons'


const Sidebar = () => (
    <div className='nav-bar'>
        <Link className='logo' to='/'>
            <img src={Logo1} alt="logo1" />
            <img className="sublogo" src={Logo2} alt="logo" />
        </Link>
        <nav>
            <NavLink exact="true" activeclassname="active" to="/">
                <FontAwesomeIcon icon={faHome} color= "#0e4e86" />
            </NavLink>

            <NavLink exact="true" activeclassname="active" className="about-link" to="/about">
                <FontAwesomeIcon icon={faUser} color= "#0e4e86" />
            </NavLink>

            <NavLink exact="true" activeclassname="active" className="contact-link" to="/contact">
                <FontAwesomeIcon icon={faEnvelope} color= "#0e4e86" />
            </NavLink>

        </nav>
    </div>
)

export default Sidebar