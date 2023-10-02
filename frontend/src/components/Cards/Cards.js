import React from "react";
import '../../styles/Card-styles.css';
import { Link } from "react-router-dom";

const Cards = ({results, page}) => {
  let display;

  if (results){
    display = results.map((x) => {
    let { id, name, image, location, status, species } = x;
      
      return (
        <Link
          style={{textDecoration:'none'}}
          to = {`${page}${id}`}
          key={id} 
          className='col-3 mb-4'
        >
          <div className='card'>
            <img src={image} alt='' className='img-fluid' />
            <div className='content'>
              <div className='fs-4 fw-bold'>{name}</div>
              
              <div className='d-flex align-items-center mb-4'>
                <div className='fs5 me-2'>{species} - </div>
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
              </div>

              <div className=''>
                <div className='fs-6'>Last known location:</div>
                <div className='fs-5'>{location.name}</div>
              </div>
            </div>
          </div>
        </Link>
      );
    });
  } else {
    display = "Nenhum Personagem encontrado";
  }

  return <>{display}</>;
}

export default Cards;