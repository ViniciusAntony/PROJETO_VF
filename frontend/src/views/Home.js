import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import React, { useState, useEffect } from "react";

import '../styles/Main-styles.css';
import '../styles/Home-styles.css';
import Cards from "../components/Cards/Cards";
import Pagination from "../components/Pagination/Pagination";
import Search from "../components/Search/Search";
import Main from "../components/Main/Main";

const Home = ({props}) => {
  let [pageNumber, setPageNumber] = useState(1);
  let [search, setSearch] = useState("");
  let [fetchedData, updateFetchedData] = useState([]);
  let { info, results } = fetchedData;

  let api = `https://rickandmortyapi.com/api/character/?page=${pageNumber}&name=${search}`;

  useEffect(() => {
    (async function () {
      let data = await fetch(api).then((res) => res.json());
      updateFetchedData(data);
    })();
  }, [api]);

  return (
    <div>
      <Main />
      
      <h1 className='text-center my-4'>
        Rick & Morty <span className='text-primary'>Characters</span>
      </h1>

      <Search setPageNumber={setPageNumber} setSearch={setSearch} />

      <div className='cards-box'>
        <div className='container'>
          <div className='row'>
            <div className='col-12'>
              <div className='row'>
                <Cards page="/" results={results}/>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Pagination info={info} pageNumber={pageNumber} setPageNumber={setPageNumber} />
    </div>
  );
}

export default Home;