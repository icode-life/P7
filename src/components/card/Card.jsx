import {Link} from 'react-router-dom'
import './Card.scss'

const Card = ({title, cover}) => {
    return(
        <div style={{backgroundImage: `url(${cover})`}} className='card'>
            <p>{title}</p>
{/*             <img src={cover} alt='cover logement'/>
 */}    </div>
      );
};

export default Card;