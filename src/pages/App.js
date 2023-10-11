import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Characters from '../components/Characters';
import Pagination from '../components/Pagination';
import Search from '../components/Search';

function App() {

  const [characters, setCharacters] = useState([]);  // Estado para almacenar la lista de personajes
  const [info, setInfo] = useState({});  // Estado para almacenar información de paginación
  const [foundCharacter, setFoundCharacter] = useState(null);    // Estado para almacenar un personaje encontrado
  const initialUrl = 'https://rickandmortyapi.com/api/character';   // URL inicial de la API de Rick and Morty
  const [searchQuery, setSearchQuery] = useState('');   // Estado para almacenar la consulta de búsqueda actual

  // Función para hacer una solicitud a la API de Rick and Morty y obtener los personajes
  const fetchCharacters = (url) => { //la función fetch va a retornar una promesa (then.....)
    fetch(url)
      .then((response) => response.json()) 
      .then((data) => { //la respuesta la tenemos que convertir a un objeto de javascript-Pasamos de json a javascript
        // Actualiza el estado de los personajes con los resultados de la API. Con setCharacter pretendo colocar"
        setCharacters(data.results);
        // Actualiza el estado de la información de paginación
        setInfo(data.info);
      })
      .catch((error) => console.log(error));
  };

  // Función para buscar todos los personajes por nombre
  const searchAllCharacters = (name) => {
    // Actualiza el estado de la consulta de búsqueda
    setSearchQuery(name);
    // Construye la URL de búsqueda con el nombre proporcionado
    const url = `https://rickandmortyapi.com/api/character/?name=${name}`;
    // Llama a la función fetchCharacters para obtener los resultados de la búsqueda
    fetchCharacters(url);
  };

  // Función para ir a la página anterior
  const onPrevious = () => {
    fetchCharacters(info.prev);
  };

  // Función para ir a la página siguiente
  const onNext = () => {
    fetchCharacters(info.next);
  };

  // Efecto de inicialización que carga los personajes al cargar la aplicación
  useEffect(() => {
    // Llama a la función fetchCharacters con la URL inicial
    fetchCharacters(initialUrl);
  }, []);

  return (
    <>
      {/* Componente Navbar para mostrar la barra de navegación */}
      <Navbar brand />
      <div className="container mt-5">
        {/* Componente Search para realizar búsquedas */}
        <Search onSearch={searchAllCharacters} />
        {/* Comprueba si se encontró un personaje */}
        {foundCharacter ? (
          <div className="row">
            {/* Renderiza el personaje encontrado */}
          </div>
        ) : (
          <>
            {/* Componente Pagination para navegar entre páginas */}
            <Pagination
              prev={info.prev}
              next={info.next}
              onPrevious={onPrevious}
              onNext={onNext}
            />
            {/* Componente Characters para mostrar la lista de personajes */}
            <Characters characters={characters} searchQuery={searchQuery} />
            {/* Componente Pagination nuevamente para navegar entre páginas */}
            <Pagination
              prev={info.prev}
              next={info.next}
              onPrevious={onPrevious}
              onNext={onNext}
            />
          </>
        )}
      </div>
    </>
  );
}

export default App;
