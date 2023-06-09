import { useEffect, useState } from 'react';
import './Home.scss';
import Card from '../../components/card/Card';
import Banner from '../../components/banner/Banner';
import backgroundImage from '../../assets/banner-img.png';

function Home() {
  //Pour utiliser les states, il faut toujours définir un 'getter' et un 'setter'
  const [logements, setLogements] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch('./data.json')
    .then((response) => response.json())
    .then((data) => {
      setLogements(data);
      setIsLoading(false);
    });
  }, []); //les crochets vides sont en fait le tableau de dépendance pour le refresh de la section concernée

  return (
    <div className='main'>
      <Banner backgroundImage={backgroundImage}> 
        <p className='catchPhrase'>Chez vous, partout et ailleurs</p>
      </Banner>
      <div className='container-cards'>
        {!isLoading && (logements.map((logement) => {
          return (
            <div>
                <Card key={Number(logement.id)} title={logement.title} cover={logement.cover} listingId={logement.id} />
            </div>
          )
        }))}  
      </div>    
    </div>
  );
}

export default Home;
