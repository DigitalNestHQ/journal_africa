import React, { useContext, useRef, useEffect } from 'react'
import newsContext from '../../../context/news/NewsContext'

const SearchForm = () => {
  const context = useContext(newsContext)
  const { filterNews, clearFilterNews, filtered } = context
  const text = useRef('')

  useEffect(() => {
    if (filtered === null) {
      text.current.value = ''
    }
  }, [filtered])

  const handleChange = (e) => {
    if (text.current.value !== '') {
      filterNews(e.target.value)
    } else {
      clearFilterNews()
    }
  }

  return (
    <div className="search-form">
      <form className="search-news-form">
        <div className="form-group">
          <input
            type="text"
            onChange={handleChange}
            className="form-control"
            placeholder="Search news..."
            ref={text}
          />
        </div>
      </form>
    </div>
  )
}

export default SearchForm
