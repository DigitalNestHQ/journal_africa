import React from "react";
import { Link } from "react-router-dom";
import ReactHtmlParser, {
} from "react-html-parser";
import './readerlist.css'
import { formatDate } from "../../../_helper/dateFormatter";
import { HtmlParseOptions } from "../../../_helper/parseNewsHtml";

const ReaderList = ({ slug, post_title, post_description, created_at}) => {
  const getAllParagraphs = post_description.split("</p>")
  const firstParagraph = getAllParagraphs[0];
  let html;
  if(post_description){
    html = `${firstParagraph.slice(0,90)}...`
  }
  return (
    <article className="ews_articlen must-read">
      <section className="post-info d-flex justify-content-between">
        <button className="must-read-type small">Premium</button>
        <span className="must-read-date small">{formatDate(created_at)}</span>
      </section>
      <section className="must-read-text">
        <span className="must-read-heading">
          <Link to={`/post/${slug}`}>
            {post_title}
          </Link>
        </span>
      </section>
      <section className="must-read-text-2">
        <span className="must-read-description">
          <Link to={`/post/${slug}`}>
            {ReactHtmlParser(html, HtmlParseOptions)}
          </Link>
        </span>
      </section>
    </article>
  );
};
export default ReaderList;
