import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Main from "../Main/Main";
import '../../styles/CardDetail-styles.css';
import axios from 'axios';

const CardDetails = () => {
  let {id} = useParams();
  let [fetchedData, updateFetchedData] = useState([]);
  let {name, image, location, origin, gender, species, status, url} = fetchedData;

  let api = `https://rickandmortyapi.com/api/character/${id}`;

  useEffect(() => {
    (async function () {
      let data = await fetch(api).then((res) => res.json());
      updateFetchedData(data);
    })();
  }, [api]);

  const submit = async (e) => {
    e.preventDefault();
  
    try {
      await axios.post('characters', {
        name: name,
        species: species,
        image: image,
        url: url
      });

      console.log("Salvo");
    } catch (error) {
      // Lide com erros (por exemplo, exiba uma mensagem de erro)
      console.error("Erro ao salvar o card:", error);
    }
  }

  return(
    <div>
      <Main />

      <div className='container-title-DetailCard'>
        <div className='wrap-title-DetailCard'>
          <span className='title-DetailCard'>Detalhes</span>
        </div>
      </div>

      <div className='container-DetailCard'>
        <div className='wrap-DetailCard'>
          <div className='image-section'>
            <img className="img-fluid" src={image} alt="" />
          </div>

          <div className='info-section'>
            {(() => {
              if (status === "Dead"){
                return(
                  <div className='badge bg-danger'>{status}</div>
                )
              }else if (status === "Alive"){
                return(
                  <div className='badge bg-success'>{status}</div>
                )
              }else {
                return(
                  <div className='badge bg-secondary'>{status}</div>
                )
            }})()}
            <div className='info-field'></div>
            <div className='info-field'>
              <span>Nome: {name}</span>
            </div>
            <div className='info-field'>
              <span>Gênero: {gender}</span>
            </div>
            <div className='info-field'>
              <span>Espécie: {species}</span>
            </div>
            <div className='info-field'>
              <span>Localização: {location?.name}</span>
            </div>
            <div className='info-field'>
              <span>Origem: {origin?.name}</span>
            </div>

            <form onSubmit={submit}>
              <button className='DetailCard-btn' type='submit'>Salvar</button>
            </form>

          </div>
        </div>
      </div>
    </div>
  )
}

export default CardDetails;