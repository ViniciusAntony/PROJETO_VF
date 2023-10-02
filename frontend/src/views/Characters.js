import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import React, { useState, useEffect } from "react";

import '../styles/Main-styles.css';
import '../styles/Home-styles.css';
import CardsSaved from "../components/Cards/CardsSaved";
import Main from "../components/Main/Main";

const Characters = ({props}) => {
    let [fetchedData, updateFetchedData] = useState([]);
    let { info, results } = fetchedData;

    let api = 'http://localhost:8000/api/getCards';

    useEffect(() => {
      (async function () {
        try {
          const response = await fetch(api);
          if (response.ok) {
            const data = await response.json();
            updateFetchedData(data);
          } else {
            console.error("Erro ao buscar cards:", response.status);
          }
        } catch (error) {
          console.error("Erro ao buscar cards:", error);
        }
      })();
    }, []);

    const handleDelete = async (id) => {
      try {
        const response = await fetch(`http://localhost:8000/api/getCards/${id}`, {
          method: "DELETE",
        });
  
        if (response.ok) {
          // Atualize a lista de cards após a exclusão
          const updatedResults = results.filter((card) => card.id !== id);
          updateFetchedData({ info, results: updatedResults });
        } else {
          console.error("Erro ao excluir o card:", response.status);
        }
      } catch (error) {
        console.error("Erro ao excluir o card:", error);
      }
    };

    return (
      <div>
        <Main />
        
        <div className='cards-box my-4'>
          <div className='container'>
            <div className='row'>
              <div className='col-12'>
                <div className='row'>
                  <CardsSaved results={fetchedData} onDelete={handleDelete} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}

export default Characters;