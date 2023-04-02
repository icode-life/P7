import {Link} from 'react-router-dom'
import './Header.scss'

const Header = () => {
    return(
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
      );
};

export default Header;