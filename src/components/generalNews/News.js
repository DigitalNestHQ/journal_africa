import React, { useEffect, useState, Fragment, useContext } from "react";
import CommentForm from "./CommentForm";
import ShareNews from "./ShareNews";
import ReactHtmlParser, {
  processNodes,
  convertNodeToElement,
} from "react-html-parser";
import Nav from "../reusables/navigation/Nav/Nav";
import Footer from "../reusables/navigation/Footer/Footer";
import { Link, useParams } from "react-router-dom";
import { Button } from "react-bootstrap";
import { getNewsComments, getNewsFeed, getSingleNews } from "../../context/news/NewsApi";
import Loader from "../loader/Loader";
import "./allNews.css";
import NewsComments from "./NewsComments";
import { FreeReaderPersuader, ContinueReadingWithAuth } from "./FreeReaderPersuader";
import ReaderList from "../homepage/politics/ReaderList";
import { ContactsAds1 } from "../ContactUs/mainSection/ContactsAds";
import { formatDate } from "../../_helper/dateFormatter";
import authContext from "../../context/auth/authContext";

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
  const userContext = useContext(authContext);
  const { user } = userContext;
  const [news, setNews] = useState(null);
  const [readersListNews, setReadersListNews] = useState(null);
  const [comments, setComments] = useState(null);
  const [hasSubscription, setHasSubscription] = useState(user?.subscribe);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const { slug } = useParams();
  const [previousPost, setPreviousPost] = useState(null)
  const [nextPost, setNextPost] = useState(null)
  useEffect(() => {
    if(news){
        // not dynamic
        setNextPost(readersListNews?.filter((sameCateNews)=>sameCateNews.category_id === news?.category_id)[1])
        setPreviousPost(readersListNews?.filter((sameCateNews)=>sameCateNews.category_id === news?.category_id)[0])
    }
  },[news])
console.log(comments);
  useEffect(() => {
    const getThisNews = () => {
      try {
        // fetch the news from the cms
        getSingleNews(slug).then((res) => {
          // only set news when there is a response, using if keeps infinite loader
          res && setNews(res[0]);
          
        })
        // get the current news comments
        getNewsComments(slug).then((res) => {
          res && setComments(res.data)
        })
        // get the readers list news
        getNewsFeed().then((data) => {
          setReadersListNews(data?.filter((allNews)=>allNews.post_type === 'premium'));
          setLoading(false);
        });
        } catch (error) {
          if (error) {
            setError(error.message);
            console.log(error);
          }
        }
      };
      getThisNews(); 

  }, [slug]);
  console.log(readersListNews?.filter((sameCateNews)=>sameCateNews.category_id === news?.category_id));
  let html;
  if (news) {
    // when the news is premium and the user has a subscription let them reall all, else let them read 2 paragraphs             if the user user is logged in let them read the free news but if not logged in, let them read 2 paragraphs
    // html = `${news.post_type === 'premium' ? (hasSubscription ? news.post_description : news.post_description.slice(0, 2000)) : (user ? news.post_description : news.post_description.slice(0, 2000))}`;
    html = `${news.post_type === 'premium' ? (hasSubscription ? news.post_description : news.post_description.slice(0, 2000)) : (news.post_description)}`;
  }
  if (loading) {
    return (
      <div>
        <Loader />
      </div>
    );
  }
  return (
    <Fragment>
      <Nav />

      {
        news &&
        <div className="container news pr-lg-5">
          <div className="row">
            <article className="news-body col-12 col-md-12 col-lg-9 bg-dager">
              <span className="news-posted-date small">{news.category_id} - {formatDate(news.created_at)}</span>
              <h2 className="post_title">{news.post_title}</h2>
             <div className="img-news-con">

              <img
                className="post_img"
                src={`https://api.tv24africa.com/public/storage/post_image/${news.featured_image}`}
                alt="news"
                />
              </div>
              <div className="text-wrap">{ReactHtmlParser(html, options)}</div>
            </article>
            <section className="d-none d-md-block d-lg-block ml-3 ml-md-4 mx-auto ml-lg-0 col-10 col-md-7 col-lg-3 news-reader-list">
              {readersListNews?.slice(0, 2).map((news) => {
                const { slug, post_title, id, created_at, post_description, post_type} = news;
                return <ReaderList 
                key={id} 
                slug={slug} 
                post_title={post_title}
                post_description={post_description}
                created_at={created_at}
                post_type={post_type}
                />;
              })}
              <ul className="list-unstyled mb-5">
                <li><ContactsAds1 /></li>
              </ul>
            </section>
          </div>
          <div className="row free-users-persuader">
            <section className="col-12 col-md-12 col-lg-9">
              {/* if the user is not logged in, prompt them to login or signup */}
              {!user && news.post_type === 'free' && (<ContinueReadingWithAuth />)}
              {/* prompt users without subscription to get 1 */}
              {news.post_type === 'premium' && !hasSubscription && (<FreeReaderPersuader />)}
              <ShareNews />
              <section className="up-next-container">
                <article className="previous-article">
                  <Link to={`/post/${previousPost?.slug}`}>
                    <p className="previous-article-heading">Previous Article</p>
                    <span className="previous-article-content">{previousPost?.post_title}</span>
                  </Link>
                </article>
                <article className="next-article">
                  <Link to={`/post/${nextPost?.slug}`}>
                    <p className="next-article-heading">Next Article</p>
                    <span className="next-article-content">{nextPost?.post_title}</span>
                  </Link>
                </article>
              </section>


              <section className="news-teaser-article">
                {// only show the news that are in the same category with the current news and remove the current news from the displayed ones
                  readersListNews?.filter((newsList)=>newsList.category_id === news.category_id && newsList.id !== news.id).slice(0,4).map(({featured_image, post_title})=>{
                    return(
                      <article>
                        <div className="news-teaser-img-wrap">
                          <img loading="lazy" 
                            src={`https://api.tv24africa.com/public/storage/post_image/${featured_image}`}
                          />
                        </div>
                        <p><Link to={`/post/${slug}`} className="news-teaser-heading">{post_title}</Link></p>
                      </article>
                    )
                  })
                }
              </section>

                {/* news comments */}
              <NewsComments comments={comments}/>
              {/* comment form */}
              <CommentForm post_title={news.post_title} post_id={news.id}/>

              
            </section>
            <section className="ml-3 ml-md-4 mx-md-auto mx-lg-auto ml-lg-0 col-10 co-md-3 col-lg-3 news-reader-list">
            {readersListNews?.slice(4, 6).map((news) => {
              const { slug, post_title, id, created_at, post_description, post_type} = news;
                return <ReaderList 
                key={id} 
                slug={slug} 
                post_title={post_title}
                post_description={post_description}
                created_at={created_at}
                post_type={post_type}
                />;
              })}
              <ul className="list-unstyled mb-5">
                <li><ContactsAds1 /></li>
              </ul>
            </section>
          </div>
        </div>
      }
      <Footer />
    </Fragment>
  );
};

export default GetNews;
