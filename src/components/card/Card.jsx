import {Link, useParams} from 'react-router-dom'
import './Card.scss'

const Card = ({title, cover, listing}) => {    
    return(
        <Link to={`/listings/:${listing}`}>
            <div style={{backgroundImage: `linear-gradient(to bottom, transparent 0%, transparent 80%, #555555 100%), url(${cover})`}} className='card'>
                <p className='card-title'>{title}</p>
            </div>
        </Link>
      );
};

export default Card;