import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import './Listing.scss';
import ListingsData from '../../assets/listings.json';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { faStar as faStarEmpty } from '@fortawesome/free-regular-svg-icons'


function Listing() {

    let {listing} = useParams();
    let splitListing = listing.split("");
    splitListing.splice(0,1);
    const listingId = splitListing.join('');
    
    const listingDetails = ListingsData.find( (lst) => lst.id === listingId);
    console.log(listingDetails);

    return (
        <div>
            <div className='carouselContainer'>
                <img src={listingDetails.pictures[0]} alt="photos carousel" className='carousel'/>
            </div>
            <div className='listingTitleNProp'>
                <div className='titleNSub'>
                    <div className='titleMain'>{listingDetails.title}</div>
                    <div className='sub'>{listingDetails.location}</div>
                </div>
                <div className='proprio'>
                    <div className='name'>{listingDetails.host.name}</div>
                    <img className='pic' src={listingDetails.host.picture}></img>
                </div>
            </div>
            <div className='tagsNStars'>
                <div className='tags'>{listingDetails.tags.map((tag) => { 
                    return(
                        <p className='tag'>{tag}</p>
                )})}</div>
                <div className='stars'><FontAwesomeIcon icon={faStarEmpty} /></div>
            </div>
            <div className='collapses'>
                <div className='collapse'>collapse 1</div>
                <div className='collapse'>collapse 2</div>
            </div>
        </div>
    )
}
export default Listing;


/*     const [lst, setLst] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetch('./data.json')
        .then((response) => console.log(response))
        .then((data) => {
                        console.log(data);

        setLst(data);
        setIsLoading(false);
        console.log(lst);
        });
    }, []); */