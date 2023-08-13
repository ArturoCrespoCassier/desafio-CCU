import React from 'react'

export const Header = () => {

      

  return (
    <header>
        <nav>
            <div>
                <img className='imagen-starwars' src='https://upload.wikimedia.org/wikipedia/commons/6/6c/Star_Wars_Logo.svg' alt='Título Star Wars' />
            </div>
            <ul className='titulo'>
                
                <li><h2 style={{fontSize: "30px", fontFamily: "sans-serif"}}>Saga completa de Star Wars</h2></li>
                <li><hr/></li>
                <li><h3 style={{fontSize: "20px", fontFamily: "sans-serif", opacity: ".7", paddingTop: "20px"}}>Seleccione una película para más información</h3></li>
            </ul>
        </nav>
    </header>
  )
}
