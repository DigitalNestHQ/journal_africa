import React, { useEffect, useState, Fragment } from "react";
import CommentForm from "./CommentForm";
import ShareNews from "./ShareNews";
import ReactHtmlParser, {
  processNodes,
  convertNodeToElement,
} from "react-html-parser";
import Nav from "../reusables/navigation/Nav/Nav";
import Footer from "../reusables/navigation/Footer/Footer";
import { useParams } from "react-router-dom";
import { Button } from "react-bootstrap";
import { getNewsComments, getSingleNews } from "../../context/news/NewsApi";
import Loader from "../loader/Loader";
import "./allNews.css";
import NewsComments from "./NewsComments";
import { FreeReaderPersuader } from "./FreeReaderPersuader";

function transform(node, index) {
  if (node.type === "tag" && node.name === "span") {
    return null;
  }
  if (node.type === "tag" && node.name === "ul") {
    node.name = "ol";
    return convertNodeToElement(node, index, transform);
  }

  if (node.type === "tag" && node.name === "b") {
    return <i key={index}>{processNodes(node.children, transform)}</i>;
  }
  if (node.type === "tag" && node.name === "a") {
    node.attribs.target = "_blank";

    return convertNodeToElement(node, index, transform);
  }

  if (node.type === "tag" && node.name === "button") {
    return (
      <Button variant="contained" color="primary" key={index}>
        {processNodes(node.children, transform)}
      </Button>
    );
  }
}

const options = {
  decodeEntities: true,
  transform,
};
const GetNews = () => {
  const [news, setNews] = useState(null);
  const [comments, setComments] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const { slug } = useParams();

  useEffect(() => {
    let subscribe = true;
    if (subscribe) {
      const getThisNews = () => {
        try {
          getSingleNews(slug).then((res) => {
            // only set news when there is a response, using if keeps infinite loader
            res && setNews(res[0]);
            setLoading(false);

          })
          getNewsComments(slug).then((res) => {
            res && setComments(res.data)
          })
        } catch (error) {
          if (error) {
            setError(error.message);
            console.log(error);
          }
        }
      };
      getThisNews();
    }
    return () => (subscribe = null);
  }, []);
  let html;
  if (news) {
    html = `<div>${news.post_description}</div>`;
  }
  if (loading) {
    return (
      <div>
        <Loader />;
      </div>
    );
  }
  return (
    <Fragment>
      <Nav />

      {
        news &&
        <div className="container news">
            <h2 className="post_title">{news.post_title}</h2>
            <img
              style={{
                float: "left",
                margin: "9px 15px",
              }}
              className="post_img"
              src={`https://api.tv24africa.com/public/storage/post_image/${news.featured_image}`}
              alt="news"
            />
            <div className="text-wrap">{ReactHtmlParser(html, options)}</div>
            <FreeReaderPersuader />
            <NewsComments comments={comments}/>
            <CommentForm post_title={news.post_title} post_id={news.id}/>
            <ShareNews />
          </div>
        }
      <Footer />
    </Fragment>
  );
};

export default GetNews;
