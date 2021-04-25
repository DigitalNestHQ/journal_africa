import React from "react";
import { Card } from "react-bootstrap";
import ReactHtmlParser, {
} from "react-html-parser";
import { Link } from "react-router-dom";
import { HtmlParseOptions } from "../../../_helper/parseNewsHtml";

const EconomyCard = ({ featured_image, category_id, post_type, post_title, slug, post_description }) => {

const getAllParagraphs = post_description.split("</p>")
const firstParagraph = getAllParagraphs[0];
let html;
if(post_description){
  html = `${firstParagraph.slice(0, 100)}...`
}
  return (
    <div className="col-6 col-md-3 col-lg-3 my-2 mg-sm-scr">
      <Card className="mt-wrap economy-card">
      <Link to={`/post/${slug}`} className="">
        <Card.Img src={`https://api.tv24africa.com/public/storage/post_image/${featured_image}`} 
          alt="Card image" 
          className="ent-h-100" />
        </Link>
        {/* <Card.ImgOverlay className="overlay">
          <Card.Text className=""> */}
            {/* {post_type === "premium" ? (
              <span className="premium_category_indicator--life">
                { post_type }
              </span>
            ) : ""} */}
          {/* </Card.Text>
        </Card.ImgOverlay> */}
        <Card.Text className="economy-text">
          <span className="economy-heading">
            <Link to={`/post/${slug}`} className="">{post_title}</Link>
          </span>
          <span className="economy-description">
            <Link to={`/post/${slug}`} className="">{ReactHtmlParser(html, HtmlParseOptions)}</Link>
          </span>
        </Card.Text>
      </Card>
    </div>
  );
};

export default EconomyCard