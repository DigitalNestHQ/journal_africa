import React from "react";
import { Link } from "react-router-dom";
import ReactHtmlParser, {
} from "react-html-parser";
import { HtmlParseOptions } from "../../_helper/parseNewsHtml";

const CategoryCard = ({ post_title, featured_image, id, post_type, slug, post_description }) => {
  const getAllParagraphs = post_description.split("</p>")
  const firstParagraph = getAllParagraphs[0];
  let html;
  if(post_description){
    html = `${firstParagraph.slice(0,50)}...`
  }
  return (
    <div className="main-section-card card-only sec-2">
      <div className="image category-img">
        <img
          src={`https://api.tv24africa.com/public/storage/post_image/${featured_image}`}
          alt={id}
        />
        {// only show the post type for premium
          post_type == "premium" && <span className="premium-tag premium_category_indicator ml-">{ post_type }</span>
        } 
      </div>

      <div className="card-caption mt-lg-0">
      <Link to={`/post/${slug}`}>
        <h3 className="card-caption-title">
          {" "}
          {post_title.toLowerCase().slice(0, 100)}{" "}
        </h3>
      </Link>
        {/* <br /> */}
        {/* <Link to={`/post/${slug}`}> */}
          <div  className="card-caption-content">
            <p className="mb-1 mb-md-1 mb-lg-0">
              {" "}
              {/* {slug.toLowerCase().slice(0, 50)}... <br /> <span>Read more</span> */}
              {/* {slug.toLowerCase().slice(0, 50)} */}
              {ReactHtmlParser(html, HtmlParseOptions)}
              {/* <br /> */}
            <Link to={`/post/${slug}`}>
              <span> Read more</span>
            </Link>
            </p>
          </div>
        {/* </Link> */}
      </div>
    </div>
  );
};
export default CategoryCard;
