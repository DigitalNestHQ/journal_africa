import React from "react";
import { Link } from "react-router-dom";
import { Image } from "react-bootstrap";
import ReactHtmlParser, {
} from "react-html-parser";
import { HtmlParseOptions } from "../../../_helper/parseNewsHtml";

const HeadlineCard = ({ post_title, slug, featured_image, category_id, post_description }) => {
  const getAllParagraphs = post_description.split("</p>")
  const firstParagraph = getAllParagraphs[0];
  let html;
  if(post_description){
    html = `${firstParagraph.slice(0,90)}...`
  }
  return (
    <div className=" shadow-lg container-fluid news-bg-wrappr headline--cont">
      <div className=" row mb-3 bt-red">
        <div className="col-lg-5 col-sm-12 hd-img-wrap">
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
        <div className="col-lg-7 col-sm-12 ns-txt">
          <div className="text-bold news-hd" id="news--headline">
            <Link to={`/post/${slug}`}>
              <h3>{post_title}</h3>
              <h3 className="headline-summary">{ReactHtmlParser(html, HtmlParseOptions)}</h3>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default HeadlineCard;
