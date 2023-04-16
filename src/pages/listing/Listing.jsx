import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import './Listing.scss';
import ListingsData from '../../assets/listings.json';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
/* import { faStar as faStarEmpty } from '@fortawesome/free-regular-svg-icons' */


function Listing() {

    let {listingId} = useParams();
    const [listing, setListing] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetch('../../data.json')
        .then((response) => response.json())
        .then((data) => {
            setListing(data.find(x => x.id === listingId));
            setIsLoading(false);
            console.log(isLoading);
        });
    }, []);
    
    const rating = [1, 2, 3, 4, 5];
    
    return (
        <div>
            {!isLoading ? (
            <div>
                <div className='carouselContainer'>
                    <img src={listing.pictures[0]} alt="photos carousel" className='carousel'/>
                </div>
                <div className='listingTitleNProp'>
                    <div className='titleNSub'>
                        <div className='titleMain'>{listing.title}</div>
                        <div className='sub'>{listing.location}</div>
                    </div>
                    <div className='proprio'>
                        <div className='name'>{listing.host.name}</div>
                        <img className='pic' src={listing.host.picture}></img>
                    </div>
                </div>
                <div className='tagsNStars'>
                    <div className='tags'>{listing.tags.map((tag, index) => { 
                        return(
                            <p key={index+10} className='tag'>{tag}</p>
                    )})}</div>
                    <div className='stars'>{
                        rating.map((i) => (
                            i <= Number(listing.rating) ? (
                            <FontAwesomeIcon key={i} icon={faStar} className='star' /> 
                            ) : ( 
                            <FontAwesomeIcon key={i} icon={faStar} className='starEmpty' />
                            )
                        ))
                    }
                    </div>
                </div>
                <div className='collapses'>
                    <div className='collapse'>collapse 1</div>
                    <div className='collapse'>collapse 2</div>
                </div>
            </div>
            ) : (
                <p>error API</p>
            )}
        </div>
    )
}
export default Listing;
