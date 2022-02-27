import React from 'react'
import { Link } from 'react-router-dom'
import CategoryCard from '../../category/CategoryCard'

const SearchItem = ({ newsPost }) => {
  return (
    <Link to={`/post/${newsPost.slug}`} className="category-card-links">
      <CategoryCard
        featured_image={newsPost.featured_image}
        post_type={newsPost.post_type}
        slug={newsPost.slug}
        post_description={newsPost.post_description}
      />
    </Link>
  )
}

export default SearchItem
