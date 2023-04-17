import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import './Listing.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import Collapsible from '../../components/collapse/Collapse';
import Error404 from '../error404/Error404';


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
        });
    }, []);
    
    const rating = [1, 2, 3, 4, 5];
    
     if (listing === undefined){
        return <Error404 />
     } //gestion de traficotage de l'url au niveau des ids en paramètres

    return (
        <div>
            {!isLoading ? (
            <div>
                <div className='carouselContainer'>
                    <div id="images" className='wrapper'>
                        {listing.pictures.map((pic, index) => {
                            return (
                                    <img key={index + 100} src={pic} alt="listing picture" className='carouselPic' />
                            )       
                        })}
                    {/* <img src={listing.pictures[0]} alt="photos carousel" className='carousel'/> */}
                    </div>
                    <div className="buttons">
                        <button className='prev'>
                            <FontAwesomeIcon icon={faChevronLeft} className='carouselButtons' />
                        </button>
                        <button className='next'>
                            <FontAwesomeIcon icon={faChevronRight} className='carouselButtons' />
                        </button>
                    </div>
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
                    {/* <Collapsible title={listing.description} content={listing.equipements} />
                    <Collapsible title={listing.description} content={listing.equipements} /> */}
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
