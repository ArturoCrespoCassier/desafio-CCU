import React, { useEffect, useState } from 'react';

export const Modal = ({ isOpen, setIsOpen, data, setData, charactersArray, planetsArray, starshipsArray }) => {


  const closeModal = () => {
    setIsOpen(false);
    setData();
  };

  return (
    <div>
      {isOpen && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={closeModal}>
              &times;
            </span>
            {data ? (
              <>
                <h2 style={{ textAlign: "center", paddingBottom: "20px", color: "yellow" }}>{data.title}</h2>
                <hr />
                <div style={{ display: "flex", justifyContent: "space-evenly", margin: "20px", fontSize: "20px", color: "yellow" }}>
                  <p>Fecha de Emisión: <span style={{ color: "white" }}> {data.release_date}</span></p>
                  <p>Director:  <span style={{ color: "white" }}> {data.director}</span></p>
                  <p>Película N°  <span> {data.episode_id}</span></p>
                </div>
                <hr />
                <h3 style={{ paddingTop: "10px", color: "yellow" }}>Resumen</h3>
                <p style={{ textAlign: "center", padding: "20px", letterSpacing: ".8px", lineHeight: "20px" }}>{data.opening_crawl}</p>
                <hr />

                <div className="table">
                  <div className="table-row">
                    <div className="table-cell">
                      <h3 className='encabezado-lista'>Personajes</h3>
                      {charactersArray.map((character, index) => (
                        <p key={index}>{character.name}</p>
                      ))}
                    </div>
                    <div className="table-cell">
                      <h3 className='encabezado-lista'>Planetas</h3>
                      {planetsArray.map((planet, index) => (
                        <p key={index}>{planet.name}</p>
                      ))}
                    </div>
                    <div className="table-cell">
                      <h3 className='encabezado-lista'>Naves Espaciales</h3>
                      {starshipsArray.map((starship, index) => (
                        <p key={index}>{starship.name}</p>
                      ))}
                    </div>
                  </div>
                </div>
              </>
            ) :
              <p className='modal-loading'>Cargando...</p>
            }
          </div>
        </div>
      )}
    </div>
  );
}

