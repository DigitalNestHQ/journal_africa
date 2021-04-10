import React from 'react';
import { Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { HtmlParseOptions } from "../../../_helper/parseNewsHtml";
import ReactHtmlParser, {
} from "react-html-parser";

export const DevelopmentCard = ({
    post_title,
    featured_image,
    id,
    post_type,
    slug,
    category_id,
    post_description,
}) => {
  const getAllParagraphs = post_description.split("</p>")
  const firstParagraph = getAllParagraphs[0];
  let html;
  if(post_description){
    html = `${firstParagraph.slice(0, 100)}...`
  }
    return (
        <React.Fragment>
            <div className="col-6 col-md-6 col-lg-6 mx-auto my- my-md-2 my-lg-2 development-left-side">
                <Link to={`/post/${slug}`} className="development-crd-anc-bt">
                  <div>
                  <Image className="side--img" variant="top" src={`https://api.tv24africa.com/public/storage/post_image/${featured_image}` } />
                  </div>
                    <div className="development-text">
                      <p className="development-heading">{ post_title }</p>
                      <span className="development-description">{ ReactHtmlParser(html,HtmlParseOptions) }</span>
                    </div>
                </Link>
              </div>
        </React.Fragment>
    )
}
