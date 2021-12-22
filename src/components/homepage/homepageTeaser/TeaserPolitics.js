import React from 'react'
import { HtmlParseOptions } from '../../../_helper/parseNewsHtml'
import ReactHtmlParser from 'react-html-parser'
import './teaser.css'

const TeaserPolitics = ({ eachCard }) => {
  return (
    <div className="policy-card">
      <p className="premium-badge-left">
        {eachCard.post_type === 'premium' ? `${eachCard.post_type}` : ''}
      </p>
      <div className="p-img-container">
        <img
          src={`https://api.tv24africa.com/public/storage/post_image/${eachCard.featured_image}`}
          alt={eachCard.sub_category}
          className="p-img"
        />
      </div>
      <div className="left-content">
        <h6 className="slug-default">{eachCard.slug}</h6>
        {ReactHtmlParser(
          `${eachCard.post_description.substring(0, 100)}...`,
          HtmlParseOptions,
        )}
      </div>
    </div>
  )
}

export default TeaserPolitics
