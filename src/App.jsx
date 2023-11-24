import { useEffect, useState } from 'react';
import './App.css';
import Cards from './components/cards/Cards.jsx';
import Nav from './components/nav/Nav.jsx';
import axios from "axios"
import {Routes,Route, useNavigate} from "react-router-dom"
import About from './components/about/About.jsx';
import Detail from './components/detail/Detail.jsx';
import Form from './components/form/form.jsx';
import Favorites from './components/favorites/favorites.jsx';


function App() {
   
   const [characters,setCharacters] = useState([]);
   const navigate = useNavigate() // Poder redirigir
   
   
   const [access, setAccess] = useState(false)
   const EMAIL = 'felixmasera@gmail.com'
   const PASSWORD = 'Felon123'
   
   function onSearch(id) {
      
      axios(`https://rickandmortyapi.com/api/character/${id}?`).then(
         ({ data }) => {
            if (data.name) {
               setCharacters((characters) => [...characters, data]);
            } else {
               window.alert('¡No hay personajes con este ID!');
            }
         }
         );
      };
      
   
   const login = (userData) => {
      if(userData.email === EMAIL && userData.password === PASSWORD){
         setAccess(true)
         navigate('/home')
      }
   }

   const logOut = () => {
      setAccess(false)
   }

   useEffect(() => {
      !access && navigate('/');

   }, [access]);
   const onClose = id => {
      setCharacters(characters.filter(char => char.id  !== Number(id)))
   }
   return (
      <div className='App'>
         <Nav onSearch={onSearch} />
         <Routes>
         <Route
               path='/'
               element = {<Form login={login} />}             
            />
            <Route
               path='/home'
               element = {<Cards characters={characters} onClose={onClose}/>}            
            />
            <Route
               path='/about'
               element={<About/>}
            />
            <Route
               path='/detail/:id'
               element={<Detail/>}
            />
            <Route
               path='/favorites'
               element={<Favorites/>}
            />
         </Routes>
         <hr />
      </div>
   );
}

export default App;
