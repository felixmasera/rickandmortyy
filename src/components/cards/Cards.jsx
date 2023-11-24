import React from 'react';
import Card from '../card/Card';
import "./cards.css"
export default function Cards({ characters, onClose }) {
   
   return <div className="cards">
      {
         characters.map((character) => {
            
           return <Card
               key={character.id}
               id={character.id}
               name={character.name}
               image={character.image}
               status={character.status}
               genero={character.genero}
               species={character.species}
               origin={character.origin.name}
               onClose={onClose}
            />
         })
      }
   </div>;
}
