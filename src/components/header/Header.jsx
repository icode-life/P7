import {Link} from 'react-router-dom'
import './Header.scss'
import Logo from '../../assets/logo.png'

const Header = () => {
    return(
        <div className='header'>
            <p className='logo-title'>K<img src={Logo} className='style-logo' alt='logo-Kasa'/>sa</p>
            <nav>
                <ul className='menu'>
                <li className='menu-item'>
                    <Link to="/">Accueil</Link>
                </li>
                <li className='menu-item'>
                    <Link to="/about">A propos</Link>
                </li>
                </ul>
            </nav>
        </div>
      );
};

export default Header;