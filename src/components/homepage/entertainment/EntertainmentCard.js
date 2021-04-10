import React from "react";
import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";
import ReactHtmlParser, {
} from "react-html-parser";
import { HtmlParseOptions } from "../../../_helper/parseNewsHtml";
const EntertainmentCard = ({
  featured_image,
  category_id,
  slug,
  post_title,
  post_type,
  post_description
}) => {
  const getAllParagraphs = post_description.split("</p>")
  const firstParagraph = getAllParagraphs[0];
  let html;
  if(post_description){
    html = `${firstParagraph.slice(0,90)}...`
  }
  return (
    <div className="col-lg-3 col-sm-12 my-2 mg-sm-scr">
      <Card className="text-white mt-wrap ent-card">
        <Card.Img
          src={`https://api.tv24africa.com/public/storage/post_image/${featured_image}`}
          alt="Card image"
          className="ent-h-100"
        />
        <Card.Body>
          <Card.Text className="entertainment-text">
            <Link to={`/post/${slug}`} className="entertainment-heading">{post_title.slice(0,60)}</Link>
            <Link to={`/post/${slug}`} className="entertainment-description">
              {ReactHtmlParser(html, HtmlParseOptions)}
            </Link>
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default EntertainmentCard;
