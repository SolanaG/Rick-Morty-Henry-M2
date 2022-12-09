//import styled from 'styled-components';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { deleteCharacter } from '../../redux/actions';
import { addCharacter } from '../../redux/actions';
import styles from './Card.module.css';
import React from 'react';
import { useEffect } from 'react';

export function Card({onClose,name,species,gender,image,id, deleteCharacterF,addCharacterF ,myFavorites}) {

   const [isFav, setIsFav] = React.useState(false)
   
   const handleFavorite = () => {
      if (isFav) {
         setIsFav(false)
         deleteCharacterF(id)
      }
      else if (!isFav) {
         setIsFav(true)
         addCharacterF({name, species, gender, image, id})
      }
   }
   // console.log(isFav)
   useEffect(() => {
      myFavorites.forEach((fav) => {
         if (fav.id === id) {
            setIsFav(true);
         }
      });
   }, [myFavorites]);
   
   return (
      <div className={styles.divCard} >
         <div>
            {
            isFav ? (
               <button onClick={handleFavorite}>❤️</button>
               ) : (
                  <button onClick={handleFavorite}>🤍</button>
                  )
            }
            <button onClick={onClose} className={styles.button}>X</button>
         </div>
         <div className={styles.titlesDiv}>
         <Link to={`/detail/${id}`} >
            <h3> {name} </h3>
         </Link>
            <h3> {species} </h3>
            <h3> {gender} </h3>
         </div>
         <img  src={image} alt="" />
      </div>
   );
}


const mapStateToProps = (state) => {
   return {
      myFavorites: state.myFavorites
   }
}

const mapDispatchToProps = (dispatch) => {
   return {
      addCharacterF: (character) => {dispatch(addCharacter(character))},
      deleteCharacterF: (id) => {dispatch(deleteCharacter(id))}
   }
}



export default connect(mapStateToProps, mapDispatchToProps)(Card)