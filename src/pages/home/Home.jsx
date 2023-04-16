import { useEffect, useState } from 'react';
import './Home.scss';
import Card from '../../components/card/Card';
import Banner from '../../assets/banner-img.png';

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
      <div style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${Banner})`, backgroundSize: 'cover', backgroundPosition: "center"}} className='banner'>
        <p className='catchPhrase'>Chez vous, partout et ailleurs</p>
      </div>
      <div className='container-cards'>
        {!isLoading && (logements.map((logement) => {
          return (
            <div>
                <Card key={logement.id} title={logement.title} cover={logement.cover} listingId={logement.id}/>
            </div>
          )
        }))}  
      </div>    
    </div>
  );
}

export default Home;
