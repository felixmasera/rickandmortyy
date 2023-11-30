import { useState } from "react";


export default function SearchBar({ onSearch }) {
   const [id, setId] = useState("");

   const handleChange = (event) => {
      setId(event.target.value);
      console.log(event.target.value);
   }

   console.log("id: ",id)
   const handleSearch = () => {
      onSearch(id);

      setId('');
   }
   return (
      <div className="searchbar">

         <input type="text"
            name="search"
            value={id}
            id="search"
            onChange={handleChange}
         />
         <button onClick={handleSearch}>Agregar</button>
      </div>
   );
}

