import React from 'react'
import ReactPaginate from 'react-paginate';
import '../../styles/Pagination-styles.css';

const Pagination = ({info, pageNumber, setPageNumber}) => {
    let next = () => {
        setPageNumber((x) => x + 1);
    };
    let prev = () => {
        if (pageNumber === 1) return;
        setPageNumber((x) => x - 1);
    };

    return (
    <ReactPaginate 
        className='pagination justify-content-center'
        forcePage={pageNumber === 1? 0 : pageNumber - 1}
        nextLabel='Próximo'
        previousLabel='Anterior'
        nextClassName='pagination-btn'
        previousClassName='pagination-btn'
        pageClassName='page-item'
        pageLinkClassName='page-link'
        activeClassName='active'
        onPageChange={(data) => {setPageNumber(data.selected + 1)}}
        pageCount={Math.ceil(info?.pages || 1)}
        previousLinkClassName="pagination-link"
        nextLinkClassName="pagination-link" 
    />
    )
}

export default Pagination;