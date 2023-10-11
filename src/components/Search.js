import React, {useState} from 'react';

const Search=({onSearch}) => {
    const [searchText, setSearchText] = useState(''); //Almacena el texto ingresado por el usuario.

    const handleInputChange=(e)=> {setSearchText(e.target.value); }; //  Maneja cambios en el campo de entrada de búsqueda

    /*   e: representa el objeto de evento que se pasa como argumento a la función de manejo de eventos
        .target: se utiliza para acceder al elemento HTML que desencadenó el evento.
        .value es una propiedad del elemento HTML que almacena su valor actual, como en el caso de un campo de entrada (input), 
        que contiene el texto ingresado por el usuario.

        Entonces, e.target.value se utiliza para obtener el valor actual del campo de entrada que desencadenó el evento de cambio, 
        y ese valor se usa para actualizar el estado en setSearchText */
    

    const handleSearch =() =>{
        onSearch(searchText);  // Llama a la función de búsqueda pasando el texto de búsqueda
    };

    return (
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Search by name"
            value={searchText}
            onChange={handleInputChange}
          />
          <button className="btn btn-primary mt-2" onClick={handleSearch}>
            Search
          </button>
        </div>
      );
    };
    
    export default Search;

