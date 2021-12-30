import React, { Fragment, useContext, useState } from 'react'
import newsContext from '../../../context/news/NewsContext'
import SearchItem from './SearchItem'
import SearchPaginaton from './SearchPagination'
import { Spinner } from 'react-bootstrap'
import './search.css'

const SearchComponent = ({ filtered, news }) => {
  const [currentPage, setCurrentPage] = useState(1)
  const context = useContext(newsContext)
  const { loading } = context
  const firstPageIndex = (currentPage - 1) * 10
  const lastPageIndex = firstPageIndex + 10

  if (news !== null && (news.length === 0) & !loading) {
    return <h4>No news available</h4>
  }

  return (
    <Fragment>
      {news !== null && !loading ? (
        filtered !== null ? (
          filtered
            .slice(firstPageIndex, lastPageIndex)
            .map((news) => <SearchItem newsPost={news} key={news.id} />)
        ) : (
          news
            .slice(firstPageIndex, lastPageIndex)
            .map((news) => <SearchItem newsPost={news} key={news.id} />)
        )
      ) : (
        <div className="center-spinner">
          <Spinner animation="border" variant="danger" />
        </div>
      )}

      {news !== null && !loading ? (
        filtered === null ? (
          <SearchPaginaton
            onPageChange={(page) => setCurrentPage(page)}
            currentPage={currentPage}
            pageSize={10}
            totalCount={news.length}
          />
        ) : (
          ''
        )
      ) : (
        ''
      )}
    </Fragment>
  )
}

export default SearchComponent
