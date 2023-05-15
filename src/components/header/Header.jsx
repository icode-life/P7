import {Link} from 'react-router-dom'
import './Header.scss'
import Logo from '../../assets/logo.svg'
import { useParams } from 'react-router-dom';




const Header = () => {

    const accueil = useParams();
    console.log(accueil);
    
    return(
        <div className='header'>
            <Link to="/"><img src={Logo} className='style-logo' alt='logo-Kasa'/></Link>
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