import ReactHtmlParser, {
} from "react-html-parser";
import React from "react";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import './teaser.css'
import { HtmlParseOptions } from "../../../_helper/parseNewsHtml";
const TeaserCard = ({ featured_image, slug, category_id, post_description }) => {
  let html;
  if (post_description) {
    html = `${(post_description).slice(0, 80)}...`;
  }
  return (
    
    <section className="teaser col-6 col-md-3 col-lg-3">
      <Card>
        <Link to={`/post/${slug}`} className="text-left">
            <Card.Img variant="top" src={`https://api.tv24africa.com/public/storage/post_image/${featured_image}`} style={{height: '258px', objectFit: 'cover'}} />
            <Card.Body>
              <Card.Text className="teaser-text">
                <section className="link-wrap">
                  <Link
                    to={{
                      pathname: "/news/categories",
                      search: `?category=${category_id}`,
                    }}
                  >
                    <h5 className="p-0" id="news-category-label">{category_id}</h5>
                  </Link>
                  <Link
                    to={{
                      pathname: "/news/categories",
                      search: `?category=${category_id}`,
                    }}
                    className="more-link btn btn-sm more-btn">More
                  </Link>
                </section>
                <Link to={`/post/${slug}`} className="teaser-heading">
                  {slug.toLowerCase().slice(0,250)}
                </Link>
              </Card.Text>
              <Card.Text className="teaser-news-description">
                {ReactHtmlParser(html, HtmlParseOptions)}
              </Card.Text>
            </Card.Body>
        </Link>
        </Card>
    </section>
  );
};

export default TeaserCard;