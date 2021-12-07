import axios from "axios";
const token = localStorage.getItem("token");
const config = {
  headers: {
    Authorization: `Bearer ${token}`,
    "Content-Type": "application/json",
    Accept: "application/json",
    "Access-Control-Allow-Origin": "*",
    mode: "no-cors",
  },
};

export const getSportNews = async () => {
  try {
    const sports = await axios.get(
      "https://api.tv24africa.com/api/v1/categories?category=sports",
      config
    );
    const { data } = sports;
    return data.data;
  } catch (err) {
    console.log(err);
  }
};

export const getCategories = async (category) => {
  try {
    const categories = await axios.get(
      `https://api.tv24africa.com/api/v1/categories?category=${category}`,
      config
    );
    const { data } = categories;
    return data.data;
  } catch (err) {
    console.log(err);
  }
};
export const getNewsFeed = async () => {
  try {
    const feeds = await axios.get(
      "https://api.tv24africa.com/api/v1/posts",
      config
    );
    const { data } = feeds;
    return data.data;
  } catch (err) {
    console.log(err);
  }
};
export const getSingleNews = async (slug) => {
  try {
    const feed = await axios.get(
      `https://api.tv24africa.com/api/v1/getpost/${slug}`,
      config
    );
    const { data } = feed;
    return data.data;
  } catch (err) {
    console.log(err);
  }
};

// get news comments
export const getNewsComments = async (slug) => {
  try {
    const comments = await axios.get(
      `https://api.tv24africa.com/api/v1/getcomment/${slug}`,
      config
    );
    const { data } = comments;
    return data;
  } catch (err) {
    console.log(err);
  }
};

export const postNewComment = async (newComment) => {
  try {
    const res = await axios.post(
      `https://api.tv24africa.com/api/v1/comment`,
      newComment,
      config
    );
    return res;
  } catch (err) {
    console.log("error from new comment", err);
    return err;
  }
};

// useEffect(() => {
//   async function getWordpressNews() {
//     const wordpressNews = await axios.get(
//       "https://api.tv24africa.com/api/v1/wordpress/posts"
//     );
//     setWordpressNews(wordpressNews.data.data);
//   }
//   getWordpressNews();
// }, []);