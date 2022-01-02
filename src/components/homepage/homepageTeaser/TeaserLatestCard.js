import React from 'react'
import ReactHtmlParser from 'react-html-parser'
import Moment from 'react-moment'
import './teaser.css'
import { HtmlParseOptions } from '../../../_helper/parseNewsHtml'
const TeaserLatestCard = ({ eachCard }) => {
  return (
    <div className="latest-card">
      <p className="premium-badge-left">
        {eachCard.post_type === 'premium' ? `${eachCard.post_type}` : ''}
      </p>
      <p className="latest-date">
        <Moment format="MMMM Do YYYY">{eachCard.post_date}</Moment>
      </p>
      <h6 className="latest-title slug-default">{eachCard.post_title}</h6>
      <p className="latest-text">
        {ReactHtmlParser(
          `${eachCard.post_content.substring(0, 100)}...`,
          HtmlParseOptions,
        )}
      </p>
    </div>
  )
}

export default TeaserLatestCard