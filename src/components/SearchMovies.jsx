import React, { useState, useEffect } from 'react';

const SearchMovies = ({setIsOpen, setData, setCharactersArray, setPlanetsArray, setStarshipsArray}) => {
  const [movies, setMovies] = useState([]);
  
  const [isLoading, setIsLoading] = useState(true);

  const getMovie = async (episode_id) => {

    const url = `https://swapi.dev/api/films/${episode_id}`;
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    return data;
    
  }

  const getCharacters = async (data) => {
    const characters = await data.characters;
    const charactersData = await Promise.all(
      characters.map(async url => {
        const parts = url.split('/');
        const number = parseInt(parts[parts.length - 2]);

        const urlCharacter = `https://swapi.dev/api/people/${number}`;
        const response = await fetch(urlCharacter);
        const data = await response.json();
        return data;
      })
    );
    setCharactersArray(charactersData);
  }

  const getPlanets = async (data) => {
    const planets = await data.planets;
    const planetsData = await Promise.all(
      planets.map(async url => {
        const parts = url.split('/');
        const number = parseInt(parts[parts.length - 2]);

        const urlPlanet = `https://swapi.dev/api/planets/${number}`;
        const response = await fetch(urlPlanet);
        const data = await response.json();
        return data;
      })
    );
    setPlanetsArray(planetsData);
  }

  const getStarships = async (data) => {
    const starships = await data.starships;
    const starshipsData = await Promise.all(
      starships.map(async url => {
        const parts = url.split('/');
        const number = parseInt(parts[parts.length - 2]);

        const urlStarship = `https://swapi.dev/api/starships/${number}`;
        const response = await fetch(urlStarship);
        const data = await response.json();
        return data;
      })
    );
    setStarshipsArray(starshipsData);
  }

  const openModal = async (episode_id) =>{
    setIsOpen(true);
    const data = await getMovie(episode_id);

    await getCharacters(data);
    await getPlanets(data);
    await getStarships(data);

    setData(data);
    
  }




  useEffect( () => {
    fetch('https://swapi.dev/api/films/')
      .then(response => response.json())
      .then(data => {
        setMovies(data.results);
        setIsLoading(false);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });

  }, []);

  return (
    <div>
      {isLoading ? (
        <h2 className='loading'>Cargando...</h2>
      ) : (
        <ul className='grid-movies'>
          {movies.map((movie, index) => (
            <li key={movie.episode_id} className='movie' onClick={e => openModal(index+1)}>     
              {movie.title}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchMovies;
  