import React, { Component } from "react";
import { getSportNews } from "../../context/news/NewsApi";
import SportCard from "./SportCard";
import "./sport.css";

class Sports extends Component {
  state = {
    categories: [],
  };

  async componentDidMount() {
    const sports = await getSportNews();
    this.setState(() => ({
      categories: sports,
    }));
  }
  render() {
    const { categories } = this.state;
    // console.log(categories)
    return (
      <div className="sprt-itm-wrap">
        {categories.length > 0 &&
          categories.map((categ) => {
            const { post_description, post_type, post_title, featured_image } =
              categ;
            return (
              <SportCard
                post_description={post_description}
                post_title={post_title}
                post_type={post_type}
                featured_image={featured_image}
              />
            );
          })}
      </div>
    );
  }
}

export default Sports;
