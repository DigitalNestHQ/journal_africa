import React, { useEffect, useState, Fragment, useContext } from "react";
import CommentForm from "./CommentForm";
import ShareNews from "./ShareNews";
import bannerAds from './../../assets/images/bannerads.png';
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
import { PopulateReadersList } from "../homepage/politics/ReaderList";
import { ContactsAds1 } from "../ContactUs/mainSection/ContactsAds";
import { formatDate } from "../../_helper/dateFormatter";
import authContext from "../../context/auth/authContext";
import { LargeSizeAds } from "../homepage/ads/Ads";

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
  const [categoryNews, setCategoryNews] = useState(null);
  const [comments, setComments] = useState(null);
  const [hasSubscription, setHasSubscription] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const { slug } = useParams();
  const [previousPost, setPreviousPost] = useState(null)
  const [nextPost, setNextPost] = useState(null)

  useEffect(() => {// set the user subscription status
    if(user){
      setHasSubscription(user.hasSubscribed)
    }
  }, [user])

  useEffect(() => { 
    if(news && categoryNews){
      const newsWithCurrentCategory = categoryNews?.filter((sameCateNews)=>sameCateNews.category_id === news?.category_id)
      const removeCurrentNews = newsWithCurrentCategory?.filter((otherNews)=>otherNews.id !== news?.id)
      const randomNews = Math.floor(Math.random() * removeCurrentNews?.length)
      randomNews && setNextPost(removeCurrentNews[randomNews])
      removeCurrentNews && setPreviousPost(removeCurrentNews[0])
    }
  },[news, categoryNews])

    useEffect(() => {
    // get the readers list news
    getNewsFeed().then((data) => {
     setCategoryNews(data)
     setLoading(false);
   });
 }, [])

  useEffect(() => {
    const getThisNews = () => {
      try {
        // fetch the news from the cms
        getSingleNews(slug).then((res) => {
          // only set news when there is a response, using if keeps infinite loader
          res && setNews(res[0]);
        })
      } catch (error) {
          if (error) {
            setError(error.message);
          }
        }
      };
      getThisNews(); 
  }, [slug]);


  useEffect(() => {
    // get the current news comments
    getNewsComments(slug).then((res) => {
      res && setComments(res.data)
    })
  }, [])

  let html;
  if (news) {
    // when the news is premium and the user has a subscription let them reall all, else let them read 2 paragraphs             if the user user is logged in let them read the free news but if not logged in, let them read 2 paragraphs
    // html = `${news.post_type === 'premium' ? (hasSubscription ? news.post_description : news.post_description.slice(0, 2000)) : (user ? news.post_description : news.post_description.slice(0, 2000))}`;
    html = `${news.post_type === 'premium' ? (hasSubscription ? news.post_description : news.post_description.slice(0, 1000)) : (news.post_description)}`;
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
          <div className="col-s12 read-news-banner">
            <LargeSizeAds img={bannerAds} />
          </div>
          <div className="row mt-5">
            <article className="news-body col-12 col-md-12 col-lg-9 bg-dager">
              <span className="news-posted-date small">{news.category_id} - {formatDate(news.created_at)}  - {news.post_type?.toUpperCase()}</span>
              <h2 className="post_title">{news.post_title}</h2>
             <div className="img-news-con">

              <img
                className="post_img"
                src={`https://api.tv24africa.com/public/storage/post_image/${news.featured_image}`}
                alt="news"
                />
              </div>
              <div className="text-wrap">{ReactHtmlParser(html, options)}</div>
              <div className="mt-5 news-paywall-area">
                {/* if the user is not logged in, prompt them to login or signup */}
                {!user && news.post_type === 'free' && (<ContinueReadingWithAuth />)}
                {/* prompt users without subscription to get 1 */}
                {news.post_type === 'premium' && !hasSubscription && (<FreeReaderPersuader />)}
                <ShareNews post_title={news.post_title} post_description={news.post_description} slug={slug} />
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
              <div className="free-users-persuader">
                <button className="news-teaser-article-heading">Related Articles</button>
                <section className="news-teaser-article">
                  {// only show the news that are in the same category with the current news and remove the current news from the displayed ones
                    categoryNews?.filter((newsList)=>newsList.id !== news.id).slice(0,4).map(({featured_image, post_title, slug})=>{
                      return(
                        <article key={post_title}>
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
                </div>
              </div>
            </article>
            <section className="d-none d-md-block d-lg-block ml-3 ml-md-4 mx-auto ml-lg-0 col-10 col-md-7 col-lg-3 news-reader-list">
              <PopulateReadersList news={categoryNews} start={0} end={2} />
               <ul className="list-unstyled mb-5">
                <li><ContactsAds1 /></li>
              </ul>
              <PopulateReadersList news={categoryNews} start={4} end={6} />
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