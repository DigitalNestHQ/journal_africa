import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import ReactHtmlParser, {
} from "react-html-parser";
import { HtmlParseOptions } from "../../../_helper/parseNewsHtml";

const ViewPointCard = ({ post_title, featured_image, slug, category_id, post_type, post_description }) => {
  const getAllParagraphs = post_description.split("</p>")
  const firstParagraph = getAllParagraphs[0];
  let html;
  if(post_description){
    html = `${firstParagraph.slice(0,90)}...`
  }
  return (
    // <div className="col-lg-3 col-sm-12  viewpoint-sec">
    <div className="col-6 col-md-3 col-lg-3 viewpoint-sec"
    style={{
      // margin: '10px 10px',
      padding: '0px auto'
    }}>
      <Card className="viewpoint-crd">
        <Link
          to={{
            pathname: "/news/categories",
            search: `?category=${category_id}`,
          }}
        >
          <Card.Img
            variant="top"
            src={`https://api.tv24africa.com/public/storage/post_image/${featured_image}`}
            className="sprt-crd-img"
          />
             {
            //  only show the post type for premium
              post_type !== "premium" && <span className="premium-tag premium_category_indicator--viewpoint">Premium{ post_type }</span>
            } 
        </Link>
        <Card.Body className="viewpoint-text">
        <Card.Text className="card-text">
            <Link to={`/post/${slug}`} className="viewpoint-heading">{post_title.slice(0,60)}</Link>
            <Link to={`/post/${slug}`} className="viewpoint-description">
              {ReactHtmlParser(html, HtmlParseOptions)}
            </Link>
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};
export default ViewPointCard;
