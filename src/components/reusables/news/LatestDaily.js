// import React, { useContext, useEffect } from 'react'
// import { useParams, Link } from 'react-router-dom'
// import newsContext from '../../../context/news/NewsContext'
// import Navbar from '../navigation/Nav/nav'
// import bannerAds from '../../../assets/images/bannerads.png'
// import Loader from '../../loader/Loader'
// import { LargeSizeAds } from '../../homepage/ads/Ads'
// import {
//   NotLoggedIn,
//   LoggedInNotSubscribed,
// } from '../../generalNews/FreeReaderPersuader'
// import ReactHtmlParser from 'react-html-parser'
// import authContext from '../../../context/auth/authContext'
// import commentsContext from '../../../context/comments/commentsContext'
// import { Row } from 'react-bootstrap'
// import cybertruck from '../../../assets/images/cybertruck1.jpg'
// import Moment from 'react-moment'
// import { HtmlParseOptions } from '../../../_helper/parseNewsHtml'
// import { useViewPort } from '../../hooks/Viewport'
// // import '../category/newscategory.css'
// import NewsComments from '../../generalNews/NewsComments'
// import NewsForm from '../../generalNews/NewsForm'
// import RelatedNews from '../../generalNews/RelatedNews'
// import ShareNews from '../../generalNews/ShareNews'
// import Footer from '../../reusables/navigation/Footer/footer'

// const LatestDaily = () => {
//   const context = useContext(newsContext)
//   const auth = useContext(authContext)
//   const contextComment = useContext(commentsContext)
//   const { comment_loading } = contextComment
//   const { user, isAuthenticated } = auth
//   const { width } = useViewPort()
//   const breakpoint = 1150
//   const {
//     latestLoading,
//     latestNews,
//     getLatestNews,
//     getNews,
//     news,
//     loading,
//   } = context
//   const { slug } = useParams()

//   useEffect(() => {
//     getLatestNews()
//     getNews()
//     //eslint-disable-next-line
//   }, [slug])

//   if (latestLoading || loading) {
//     return <Loader />
//   }

//   const currentNews = latestNews.find((news) => news.post_title === slug)

//   const getAdjacentPosts = (slug) => {
//     const postIndex = latestNews.findIndex(
//       (postHeader) => postHeader?.post_title === slug,
//     )

//     return {
//       previous:
//         postIndex <= 0
//           ? ''
//           : {
//               slug: latestNews[postIndex - 1].post_title,
//             },
//       next:
//         postIndex >= latestNews.length - 1
//           ? ''
//           : {
//               slug: latestNews[postIndex + 1].post_title,
//             },
//     }
//   }

//   const { previous, next } = getAdjacentPosts(slug)

//   console.log(news)
//   console.log(latestNews)
//   console.log(currentNews)
//   console.log(previous)
//   console.log(next)

//   return (
//     <div className="latest-daily">
//       <Navbar />
//       <div className="single-news-section">
//         <div className="single-news-section-wrapper">
//           <div className="s-n-ads-container">
//             <LargeSizeAds img={bannerAds} />
//           </div>
//           <main className="single-news-main-section">
//             {currentNews.post_content}
//             <div className="s-n-content-grid">
//               {width > breakpoint ? (
//                 <div className="cat-left-content s-n-right-content">
//                   <h5 className="cat-left-heading">Trending Posts</h5>
//                   <div className="trend-img-container">
//                     <img src={cybertruck} alt="tesla" className="trend-img" />
//                   </div>
//                   <div className="trending-posts">
//                     {!loading && news.length === 0 ? (
//                       <h5 className="text-dark">No trending news available</h5>
//                     ) : (
//                       news.slice(0, 3).map((eachCard) => (
//                         <Link
//                           to={`/post/${eachCard.slug}`}
//                           className="trending-card"
//                           key={eachCard.id}
//                         >
//                           <p className="premium-badge-left">
//                             {eachCard.post_type === 'premium'
//                               ? `${eachCard.post_type}`
//                               : ''}
//                           </p>
//                           <p className="trend-date">
//                             <Moment format="MMMM Do YYYY">
//                               {eachCard.updated_at}
//                             </Moment>
//                           </p>
//                           <h6 className="trend-title">{eachCard.slug}</h6>
//                           <p className="trend-text">
//                             {ReactHtmlParser(
//                               `${eachCard.post_description.substring(
//                                 0,
//                                 120,
//                               )}...`,
//                               HtmlParseOptions,
//                             )}
//                           </p>
//                         </Link>
//                       ))
//                     )}
//                   </div>
//                   <div className="trend--img-container">
//                     <img src={cybertruck} alt="tesla" className="trend-img" />
//                   </div>
//                 </div>
//               ) : (
//                 ''
//               )}
//             </div>
//           </main>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default LatestDaily
