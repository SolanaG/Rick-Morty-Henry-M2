import styles from './SearchBar.module.css';
import React from 'react';


export default function SearchBar(props) {
   const [character, setCharacter] = React.useState('');
   const handleInputChange = (ev) => {
      setCharacter(ev.target.value);
   };
   return (
      <div>
         <input type='search' value={character} onChange={handleInputChange}/>
         <button className={styles.searchButton} onClick={()=>{props.onSearch(character)}} >Agregar</button>
      </div>
   );
}
