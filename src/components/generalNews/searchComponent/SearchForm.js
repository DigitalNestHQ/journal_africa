import React, { useRef, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import * as newsActions from "../../../store/actions/newsActions"

const SearchForm = () => {
  const dispatch = useDispatch()
  const getNews = useSelector((state) => state.getNews)
  const { filtered } = getNews
  const text = useRef("")

  useEffect(() => {
    if (filtered === null) {
      text.current.value = ""
    }
  }, [filtered])

  const handleChange = (e) => {
    if (text.current.value !== "") {
      dispatch(newsActions.filterNews(e.target.value))
    } else {
      dispatch(newsActions.clearFilterNews())
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
