import React from 'react'
import '../../styles/Search-styles.css';

const Search = ({setPageNumber, setSearch}) => {
  return (
    <form className='d-flex justify-content-center gap-1 mb-5'>    
        <input
            onChange={(e) => { setPageNumber(1); setSearch(e.target.value)}} 
            placeholder='Pesquise por Personagens' 
            type='text' className='input-search' 
        />
        <button 
            onClick={(e) => {e.preventDefault()}}
            className='search-btn'>Pesquisar</button>
    </form>
  )
}

export default Search;