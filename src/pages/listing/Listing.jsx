import { useParams } from 'react-router-dom';
import './Listing.scss';


function Listing() {
    
    const {listing} = useParams();
    console.log(listing);

    return (
        <div>
            <h1 className="housing">housing</h1>
        </div>
    )
}
export default Listing;