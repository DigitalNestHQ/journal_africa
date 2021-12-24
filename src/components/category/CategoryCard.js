import React from 'react'
import ReactHtmlParser from 'react-html-parser'
import { HtmlParseOptions } from '../../_helper/parseNewsHtml'

const CategoryCard = ({
  featured_image,
  post_type,
  slug,
  post_description,
}) => {
  return (
    <div className="cate-content-list">
      <div className="cat-content-list-item-img-cont">
        <p className="premium-badge">
          {post_type === 'premium' ? `${post_type}` : ''}
        </p>
        <img
          src={`https://api.tv24africa.com/public/storage/post_image/${featured_image}`}
          alt="img"
          className="cat-content-list-item-img"
        />
      </div>
      <div className="cat-content-list-item-detail">
        <h6 className="cat-content-list-item-detail-heading text-danger slug-default">{slug}</h6>
        <div className="cat-content-list-item-detail-text">
          {ReactHtmlParser(
            `${post_description.substring(0, 135)}...`,
            HtmlParseOptions,
          )}
        </div>
      </div>
    </div>
  )
}
export default CategoryCard
