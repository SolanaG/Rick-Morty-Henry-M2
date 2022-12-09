import Card from '../Card/Card';
import styles from './Cards.module.css';


export default function Cards(props) {
   const { characters } = props;
   
   return(
      <div className={styles.parentDiv}>
         
           {
               characters.map((character, i) => {
                  return <Card 
                  key={i} 
                  id={character.id}
                  name={character.name} 
                  species={character.species} 
                  gender={character.gender} 
                  image={character.image}
                  onClose={() => window.alert('Emulamos que se cierra la card')} 
                  />
               })
            }
            
         
      </div>
      )
      
}
