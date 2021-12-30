import React from 'react'
import { usePagination } from '../../hooks/PaginationHook'
import './search.css'

const SearchPagination = (props) => {
  const {
    onPageChange,
    totalCount,
    siblingCount = 1,
    currentPage,
    pageSize,
  } = props

  const paginationRange = usePagination({
    currentPage,
    totalCount,
    siblingCount,
    pageSize,
  })

  //If there are less than 2 items in pagination range we shall not render the component

  const onNext = () => {
    onPageChange(currentPage + 1)
  }

  const onPrev = () => {
    onPageChange(currentPage - 1)
  }

  if (currentPage === 0) {
    return null
  }

  return (
    <ul className="search-pagination-handle">
      {/* Left navigation arrow */}

      <button
        className="arrow-left"
        disabled={currentPage === 1}
        onClick={onPrev}
      >
        <i class="fas fa-chevron-left"></i>
      </button>

      {paginationRange.map((pageNumber, idx) => {
        // If the pageItem is a DOT, render the DOTS unicode character
        if (pageNumber === 'LEFT_PAGE' || pageNumber === 'RIGHT_PAGE') {
          return (
            <li className="pagination-item dots" key={idx}>
              &#8230;
            </li>
          )
        }

        // Render our Page Pills
        return <li onClick={() => onPageChange(pageNumber)}>{pageNumber}</li>
      })}

      {/*  Right Navigation arrow */}

      <button
        className="arrow-right"
        disabled={currentPage === paginationRange[paginationRange.length - 1]}
        onClick={onNext}
      >
        <i class="fas fa-chevron-right"></i>
      </button>
    </ul>
  )
}

export default SearchPagination
