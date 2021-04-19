import React from "react";
import { Link } from "react-router-dom";
import { Image } from "react-bootstrap";
import ReactHtmlParser, {
} from "react-html-parser";
import { HtmlParseOptions } from "../../../_helper/parseNewsHtml";

const PoliticsAndGovernanceCard = ({ post_title, slug, featured_image, category_id, post_description }) => {
  const getAllParagraphs = post_description.split("</p>")
  const firstParagraph = getAllParagraphs[0];
  let html;
  if(post_description){
    html = `${firstParagraph.slice(0,90)}...`
  }
  return (
    <div className="container-fluid news-bg-wrappr politics--cont shadow p-lg-5 mb-2">
      <div className=" row mb-3 bt-red">
        <div className="col-12 col-md-6 col-lg-5 hd-img-wrap">
          <Link
            to={{
              pathname: "/news/categories",
              search: `?category=${category_id}`,
            }}
          >
            <Image
              src={`https://api.tv24africa.com/public/storage/post_image/${featured_image}`}
              rounded
              className="hd-img"
            />
          </Link>
        </div>
        <div className="col-12 col-md-6 col-lg-7 ns-txt">
          <div className="text-bold news-hd" id="news--politics">
            <Link to={`/post/${slug}`}>
              <h3 className="politics-heading">{post_title}</h3>
              <h3 className="politics-summary">{ReactHtmlParser(html, HtmlParseOptions)}</h3>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default PoliticsAndGovernanceCard;
