import {Link} from 'react-router-dom'
import './Card.scss'

const Card = ({title, cover}) => {
    return(
        <Link to="/housing">
            <div style={{background: `linear-gradient(to bottom, transparent 0%, transparent 80%, #555555 100%), url(${cover})`}} className='card'>
                <p className='card-title'>{title}</p>
            </div>
        </Link>
      );
};

export default Card;