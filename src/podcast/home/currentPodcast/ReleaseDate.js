import React from 'react'
import Moment from 'react-moment'

const ReleaseDate = ({ date }) => {
  return (
    <div>
      <Moment format="MMMM Do YYYY">{date}</Moment>
    </div>
  )
}

export default ReleaseDate
