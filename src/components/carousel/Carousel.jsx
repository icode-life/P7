import './Carousel.scss';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';

//fetch the array populated with pictures via props
const Carousel = ({pictures}) => {

  // Set default index at array[0]
  const [position, setPosition] = useState(0);
  const arrayLength = pictures.length;

  // slider mgmt
  const scroll = (direction) => (
    direction === 'next'
      ? (setPosition(position === arrayLength - 1 ? 0 : position + 1))
      : (setPosition(position === 0 ? arrayLength - 1 : position - 1))
  );

    return(
        <div>
            <div className='carouselContainer'>
                <div id="images" className='wrapper'>   
                    <img src={pictures[position]} alt="listing picture" className='carouselPic' />
                </div>
                <div className="buttons">
                    <button className='prev'>
                        <FontAwesomeIcon icon={faChevronLeft} className='carouselButtons' onClick = {() => (scroll('previous'))} />
                    </button>
                    <button className='next'>
                        <FontAwesomeIcon icon={faChevronRight} className='carouselButtons' onClick = {() => (scroll('next'))} />
                    </button>
                </div>
            </div>
            <div>
                <p className='pagination'>{position + 1}/{arrayLength}</p>
            </div>
        </div>
    )
}

  export default Carousel;