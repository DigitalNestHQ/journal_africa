// import React, { Component } from "react";
// import PropTypes from "prop-types";
// import { getNewsFeed } from "../../context/news/NewsApi";
// import NewsCard from "../generalNews/NewsCard";

// class AllNews extends Component {
//   static propTypes = {
//     prop: PropTypes,
//   };

//   state = {
//     feeds: [],
//   };
//   async componentDidMount() {
//     const newsFeeds = await getNewsFeed();
//     this.setState(() => ({
//       feeds: newsFeeds,
//     }));
//   }

//   render() {
//     const { feeds } = this.state;
//     return (
//       <div className="sprt-itm-wra">
//         {feeds.length > 0 &&
//           feeds.map((categ) => {
//             const { post_description, post_type, post_title, featured_image, id } = categ;
//             return (
//               <NewsCard
//                 key={id}
//                 post_description={post_description}
//                 post_title={post_title}
//                 post_type={post_type}
//                 featured_image={featured_image}
//                 id={id}
//               />
//             );
//           })}
//       </div>
//     );
//   }
// }
// export default AllNews;
