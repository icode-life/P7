import './Error404.scss';
import {Link} from 'react-router-dom'

function Error404() {
    return (
        <div className='layoutErrorPage'>
            <h1>404</h1>
            <h2>Oups! La page que vous demandez n'existe pas.</h2>
            <Link to='/' className='lien'>Retourner sur la page d'accueil</Link>
        </div>
    )
}
export default Error404;

