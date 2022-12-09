import './App.css'
import Cards from './components/Cards/Cards.jsx'
import Nav from './components/Nav/Nav'
import React from 'react';
import About from './components/About/About';
import Details from './components/Details/Details' 
import Form from './components/Form/Form' 
import { Routes, Route} from 'react-router-dom'
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

export default function App () {
  const [characters, setCharacters] = React.useState([{
    name: 'Morty Smith',
    species: 'Human',
    gender: 'Male',
    image: 'https://rickandmortyapi.com/api/character/avatar/2.jpeg',
    id:2
  }]);

  const [access, setAccess]= React.useState(false)

  const location = useLocation();

  const username = 'nn@mail.com'
  const password = 'calle123'
  const navigate = useNavigate();

  function login(userData) {
    if (userData.password === password && userData.username === username) {
       setAccess(true);
       navigate('/home');
    }
  }
  function logout(){
    setAccess(false)
  }
  useEffect(() => {
    !access && navigate('/');
 }, [access]);

 function onSearch(character) {
  fetch(`https://rickandmortyapi.com/api/character/${character}`)
     .then((response) => response.json())
     .then((data) => {
        if (data.name) {
           setCharacters((oldChars) => [...oldChars, data]);
        } else {
           window.alert('No hay personajes con ese ID');
        }
     });
}


  return (
    <div className='App' style={{ padding: '25px' }}>
      {location.pathname !== "/" ? <Nav onSearch={onSearch} logout={logout}/> : null}
      <hr />
      <Routes>
        <Route  path="/home" element={<Cards characters={characters}/>} />
        <Route  path="/about" element={<About/>} />
        <Route  path="/" element={<Form login={login}/>} />
        <Route  path="/detail/:detailId" element={<Details/>} />
        <Route  path="/about" element={<About/>} />
        <Route  path="/about" element={<About/>} />

      </Routes>        
    </div>
  )
}


