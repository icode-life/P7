import './Carousel.scss';

const Carousel = () => {

  // Set current image index to 0
  const [index, setIndex] = useState(1)

  // Get house data from context
  const pictures = useContext(houseContext).pictures

  // Get the number of pictures for the carousel
  const numPictures = pictures.length

  // Set next index according to the direction
  const scroll = (direction) => (
    direction === 'right'
      ? (setIndex(index === numPictures ? 1 : index + 1))
      : (setIndex(index === 1 ? numPictures : index - 1))
  )

    return(
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
    )

}

  export default Carousel;
