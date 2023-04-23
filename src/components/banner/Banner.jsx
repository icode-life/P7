import './Banner.scss';
import backgroundImage from '../../assets/banner-img.png';


const Banner = ({ children }) => {
    return (
      <div style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), 
      url(${backgroundImage})`, backgroundSize: 'cover', backgroundPosition: "center"}} 
      className='banner'>
        {children}
      </div>
    )
}
export default Banner;