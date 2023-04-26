import './About.scss';
import Banner from '../../components/banner/Banner';
import backgroundImage from '../../assets/mountains.png';
import Collapsible from '../../components/collapsible/Collapsible';
import  '../../assets/about.json'
import { useEffect, useState } from 'react';


const About = () => {

    const [corporateValues, setCorporateValues] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetch('../../about.json')
        .then((response) => response.json())
        .then((data) => {
            setCorporateValues(data);
            setIsLoading(false);
            console.log(data);
        });
    }, []);


    return (
        <div className='about'>
            <Banner backgroundImage={backgroundImage}></Banner>
            <div className='aboutCollapsibles'>
                { !isLoading && corporateValues.map( (item) => {
                    return(
                        <Collapsible key={item} title={item.title} content={item.content} contentType='text' collapsibleType={item.collapsibleType} />
                        )    
                })
                }
                
                <Collapsible title='Respect' content='test2' contentType='text' collapsibleType='big' />
                <Collapsible title='Service' content='test3' contentType='text' collapsibleType='big' />
                <Collapsible title='Sécurité' content='test4' contentType='text' collapsibleType='big' />
            </div>
        </div>
    )
}
export default About;