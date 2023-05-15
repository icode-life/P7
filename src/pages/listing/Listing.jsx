import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import './Listing.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import Collapsible from '../../components/collapsible/Collapsible';
import Carousel from '../../components/carousel/Carousel';
import { Navigate } from "react-router-dom";


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
    });
    
    const rating = [1, 2, 3, 4, 5];
    
     if (listing === undefined){
        return <Navigate to='*' /> //unsure whether that's any better then just <Error404 />
     } //gestion de traficotage de l'url au niveau des ids en paramètres

    
    return (
        <div>
            {!isLoading ? (
            <div>
                <Carousel pictures={listing.pictures} />
                <div className='midSection'>
                    <div className='listingTitleNTags'>
                        <div className='titleNSub'>
                            <div className='titleMain'>{listing.title}</div>
                            <div className='sub'>{listing.location}</div>
                            <div className='tags'>{listing.tags.map((tag, index) => { 
                            return(
                                <p key={index+10} className='tag'>{tag}</p>
                        )})}</div>
                        </div>
                    </div>
                    <div className='proprioNStars'>
                        <div className='proprio'>
                            <div className='name'>{listing.host.name}</div>
                            <img className='pic' src={listing.host.picture} alt="proprio"></img>
                        </div>
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
                </div>
                <div className='collapses'>
                    <Collapsible title='Description' content={listing.description} contentType='text' collapsibleType='medium' />
                    <Collapsible title='Équipements' content={listing.equipments} contentType='list' collapsibleType='medium' />
                </div>
            </div>
            ) : (
                <p>error API</p>
            )}
        </div>
    )
}
export default Listing;
