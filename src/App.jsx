import { useState } from 'react'
import './App.css'
import { Header } from './components/Header'
import SearchMovies from './components/searchMovies'
import { Modal } from './components/Modal';




function App() {

  const [isOpen, setIsOpen] = useState(false);
  const [data, setData] = useState();
  const [charactersArray, setCharactersArray] = useState([]);
  const [planetsArray, setPlanetsArray] = useState([]);
  const [starshipsArray, setStarshipsArray] = useState([]);

  return (
    <>
      <div>
          <Header></Header>
      </div>
      <hr/>
      
      <SearchMovies
        setIsOpen={setIsOpen}
        setData={setData}
        setCharactersArray={setCharactersArray}
        setPlanetsArray={setPlanetsArray}
        setStarshipsArray={setStarshipsArray}
      />

      <Modal
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        data={data}
        setData={setData}
        charactersArray={charactersArray}
        planetsArray={planetsArray}
        starshipsArray={starshipsArray}
      />
      
    </>
  )
}

export default App
