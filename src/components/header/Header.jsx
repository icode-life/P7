import {Link} from 'react-router-dom'
import './Header.scss'
import Logo from '../../assets/logo.svg'

const Header = () => {
    return(
        <div className='header'>
            <img src={Logo} className='style-logo' alt='logo-Kasa'/>
            <nav>
                <ul className='menu'>
                <li className='menu-item'>
                    <Link to="/">Accueil</Link>
                </li>
                <li className='menu-item'>
                    <Link to="/about" className='underlined'>A propos</Link>
                </li>
                </ul>
            </nav>
        </div>
      );
};

export default Header;