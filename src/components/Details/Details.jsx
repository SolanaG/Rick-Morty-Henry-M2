import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import React from 'react';
import styles from './Details.module.css'
export default function Details(){
    // Obtengo el ID del personaje, lo saco del id del URL. 
    // useParams() devuelve un objeto, y el ID esta en id.detailId (!)
    const paramsObj = useParams()

    const navigate = useNavigate()
    
    // creo un estado character y un set
    const [character, setCharacter]= React.useState({origin:{name:''}})
    
    
    // llamo al hook useEffect y hago el llamado a la api
    useEffect(() => {
        fetch(`https://rickandmortyapi.com/api/character/${paramsObj.detailId}`)
           .then((response) => response.json())
           .then((char) => {
              if (char.name) {
                // recibo el objeto que me devuelve la API, y lo seteo en mi estado como mi character!
                // console.log('char::',char)
                 setCharacter(char);
                
              } else {
                 window.alert('No hay personajes con ese ID');
              }
           })
           .catch((err) => {
            // console.log('error',JSON.parse(err))
              window.alert('No hay personajes con ese ID');
           });
           // no se xq esta este return
         return setCharacter({origin:{name:''}});
     }, [paramsObj.detailId]);

     const backToHome = () => {
        return navigate('/home')
      }

    return(
        // renderizo los datos de mi personaje:
    <div className={styles.parentDiv}>
        <div>

            <span>Nombre: {character.name}</span>
            <br />
            <span>Status: {character.status}</span>
            <br />
            <span>Especie: {character.species}</span>
            <br />
            <span>Género: {character.gender}</span>
            <br />
            <span>Origen: {character.origin.name}</span>
            <div>
              <button onClick={backToHome}>Home</button>
            </div>                       
        </div>
        <div>
            <img src={character.image} alt="" />            
        </div>
        </div>
    )
}