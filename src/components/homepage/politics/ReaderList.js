import React from "react";
import { Link } from "react-router-dom";
import ReactHtmlParser, {
} from "react-html-parser";
import './readerlist.css'
import { formatDate } from "../../../_helper/dateFormatter";
import { HtmlParseOptions } from "../../../_helper/parseNewsHtml";

const ReaderList = ({ slug, post_title, post_description, description_slice, created_at, post_type}) => {
  const getAllParagraphs = post_description.split("</p>")
  const firstParagraph = getAllParagraphs[0];
  let html;
  if(post_description){
    html = `${post_description.slice(0, description_slice || 220 )}...`
  }
  return (
    <article className="ews_articlen must-read">
      <section className="post-info d-flex justify-content-between">
        {post_type && (<button className="must-read-type small">{post_type}</button>)}
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


export const PopulateReadersList = ({news, start, end}) => {
  const premiumNews = news?.filter((singleNews)=>singleNews.post_type === 'premium')
  return (
    <div>
       {
        premiumNews?.slice(start, end).map((news) => {
          const { slug, post_title, id, created_at, post_description, post_type} = news;
          return <ReaderList 
          key={id} 
          slug={slug} 
          post_title={post_title}
          post_description={post_description}
          created_at={created_at}
          post_type={post_type}
          />;
        })
      }
      
    </div>
  )
}

export default ReaderList;
