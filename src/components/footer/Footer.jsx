import {Link} from 'react-router-dom'
import './Footer.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCopyright } from '@fortawesome/free-solid-svg-icons'
import logoFooter from '../../assets/logo-footer.svg'


const Footer = () => {
    return(
        <footer>
            <Link to="/"><img src={logoFooter} className='style-logo' alt='logo-Kasa'/></Link>
            <div className='copyright'><FontAwesomeIcon icon={faCopyright}  /><p>2020 Kasa. All rights reserved</p></div>
        </footer>
      );
};

export default Footer;