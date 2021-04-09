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
    
    <section className="teaser col-12 col-md-12 col-lg-3">
      <Card>
          <Card.Img variant="top" src={`https://api.tv24africa.com/public/storage/post_image/${featured_image}`} style={{height: '258px', objectFit: 'cover'}} />
          <Card.Body>
            <Card.Text className="teaser-text">
              <section className="link-wrap">
                <Link to="/">
                  <h5 className="p-0" id="news-category-label">{category_id}</h5>
                </Link>
                <Link to="/" class="more-link btn btn-sm more-btn">More
                </Link>
              </section>
              <Link to={`/post/${slug}`} className="teaser-heading">
                {slug.toLowerCase().slice(0,250)}
              </Link>
            </Card.Text>
            <Card.Text className="teaser-news-description">
              {ReactHtmlParser(html, HtmlParseOptions)}
              {/* {slug} */}
            </Card.Text>
          </Card.Body>
        </Card>
    </section>
  );
};

export default TeaserCard;



// <div className="col-12 col-md-12 col-lg-3 mb-3 b-sm-2 ts-card-wrap" data-as="fade-right">
    //   <Link
    //     to={{
    //       pathname: "/news/categories",
    //       search: `?category=${category_id}`,
    //     }}
    //   >
    //     <Card className="text-white mt-wrap h-100">
    //       <Card.Img
    //         src={`https://api.tv24africa.com/public/storage/post_image/${featured_image}`}
    //         alt="Card image"
    //         className="h-100"
    //       />
    //       <Card.ImgOverlay className="m-t text-center d-flex justify-content-end flex-column align-items-center ts-oerlay" style={{height: "100%",background: "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.6)"}}>
    //         <Button variant="outline-dange" className="butn" style={{fontSize: '20px'}}>
    //           {category_id}
    //         </Button>
    //         <Card.Text className="ts-card-txt" style={{zIndex:"200"}}>
    //           <Link to={`/post/${slug}`} className="ts-card-txt text-white p-3" style={{height: '100px'}}>
    //             {slug.toLowerCase().slice(0,90)}...
    //           </Link>
    //         </Card.Text>
    //       </Card.ImgOverlay>
    //     </Card>
    //   </Link>
    // </div>