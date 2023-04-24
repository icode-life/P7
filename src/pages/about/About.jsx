import './About.scss';
import Banner from '../../components/banner/Banner';
import backgroundImage from '../../assets/mountains.png';
import Collapsible from '../../components/collapsible/Collapsible';

const About = () => {
    return (
        <div className='about'>
            <Banner backgroundImage={backgroundImage}></Banner>
            <div className='aboutCollapsibles'>
                <Collapsible title='Fiabilité' content='test1' contentType='text' collapsibleType='big' />
                <Collapsible title='Respect' content='test2' contentType='text' collapsibleType='big' />
                <Collapsible title='Service' content='test3' contentType='text' collapsibleType='big' />
                <Collapsible title='Sécurité' content='test4' contentType='text' collapsibleType='big' />
            </div>
        </div>
    )
}
export default About;