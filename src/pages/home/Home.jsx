import { useEffect, useState } from 'react';
import './Home.scss';
import Card from '../../components/card/Card';

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
      <div className='container-cards'>
        {!isLoading && (logements.map((logement) => {
          return (
            <div>
                <Card key={logement.id} title={logement.title} cover={logement.cover}/>
            </div>
          )
        }))}  
      </div>    
    </div>
  );
}

export default Home;
