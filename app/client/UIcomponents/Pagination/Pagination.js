import React from 'react'
import './Pagination.less'


const Pagination = ({currentPage, totalNumberOfPages, onClick}) => {
  const callback = (e) => {
    onClick(parseInt(e.currentTarget.getAttribute('data-page')))
  }
  const numbers = []
  for (let i = 0; i < totalNumberOfPages; i++) {
    numbers.push(currentPage === i ?
      <span className='paginationRegular disabled' key={i}> {i} </span> :
      <span className='paginationRegular enabled' key={i} onClick={callback} data-page={i}> {i} </span>
    )
  }
  return (
    <div className='pagination'>
      {numbers}
    </div>
  )
}

export default Pagination
