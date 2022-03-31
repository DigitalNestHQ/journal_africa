import React, { useState } from "react"
import SearchItem from "./SearchItem"
import SearchPaginaton from "./SearchPagination"
import "./search.css"

const SearchComponent = ({ filtered, news }) => {
  const [currentPage, setCurrentPage] = useState(1)
  const firstPageIndex = (currentPage - 1) * 10
  const lastPageIndex = firstPageIndex + 10

  return (
    <>
      {filtered !== null
        ? filtered.map((news) => <SearchItem newsPost={news} key={news.id} />)
        : news
            .slice(firstPageIndex, lastPageIndex)
            .map((news) => <SearchItem newsPost={news} key={news.id} />)}

      {filtered === null && (
        <SearchPaginaton
          onPageChange={(page) => setCurrentPage(page)}
          currentPage={currentPage}
          pageSize={10}
          totalCount={news.length}
        />
      )}
    </>
  )
}

export default SearchComponent
