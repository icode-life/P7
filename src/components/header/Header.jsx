import {Link} from 'react-router-dom'
import './Header.scss'
import Logo from '../../assets/logo.svg'
import { useParams } from 'react-router-dom';




const Header = () => {

    const about = useParams();
    

    return(
        <div className='header'>
            <Link to="/"><img src={Logo} className='style-logo' alt='logo-Kasa'/></Link>
            <nav>
                <ul className='menu'>
                <li className='menu-item'>
                    <Link to="/" className='underlined'>Accueil</Link>
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