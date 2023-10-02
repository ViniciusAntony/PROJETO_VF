import React from "react";
import '../../styles/Card-styles.css';

const CardsSaved = ({results, onDelete}) => {
    let display;

    if (results){
        display = results.map((x) => {
            let { id, name, image, species, url } = x;

            return (
                <div className='col-3 mb-4'>
                    <div className='card'>
                        <img src={image} alt='' className='img-fluid' />
                        <div className='content'>
                            <div className='fs-4 fw-bold'>{name}</div>
                        
                            <div className='d-flex align-items-center mb-4'>
                                <div className='fs5 me-2'>{species}</div>
                            </div>
                            <div className='fs-6'>url: {url}</div>
                            <div className='info-field'></div>
                            <button className='remove-btn' onClick={() => onDelete(id)}>Remover</button>
                        </div>
                    </div>
                </div>
            );
        });
    } else {
        display = "Nenhum Personagem encontrado";
    }

    return <>{display}</>;
}

export default CardsSaved;