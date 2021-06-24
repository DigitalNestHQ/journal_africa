import React from "react";
import TeaserCard from "./TeaserCard";
import "../homepage.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { LargeSizeAds } from "../ads/Ads";
import largeAds from "./../../../assets/images/largeads.png";
import { Link } from "react-router-dom";

const TeaserSection = (props) => {
  const teasers = props.data;
  // get all the category to be displayed
  const discoverAfrica = teasers.filter(
    (post) => post.category_id === "Discover Africa"
  );

  const culture = discoverAfrica.filter(
    (post) => post.sub_category === "Culture"
  );

  const places = discoverAfrica.filter(
    (post) => post.sub_category === "Places"
  );
  const lifestyle = discoverAfrica.filter(
    (post) => post.sub_category === "Lifestyle"
  );

  const people = discoverAfrica.filter(
    (post) => post.sub_category === "People"
  );

  // Select 1 news from each category
  const selectedTeasers = [culture[0], places[0], lifestyle[0], people[0]] || [
    {},
  ];

  console.log(selectedTeasers);

  AOS.init();
  if (typeof selectedTeasers[0] === "undefined") {
    return null;
  }
  return (
    <React.Fragment>
      <div className="custom-container container-fluid">
        <div className="col-12 mb-5">
          <LargeSizeAds img={largeAds} />
        </div>
      </div>
      <div
        className="teaser mt-3 mb-3 mx-auto"
        data-aos="fade-up"
        data-aos-delay="100"
        data-aos-duration="1500"
      >
        <Link
          to={{
            pathname: "/news/categories",
            search: `?category=Discover Africa`,
          }}
          className="custom-container teaser-custom-heading"
        >
          <label>Discover Africa</label>
        </Link>
        {selectedTeasers && (
          <div className="custom-container row container-fluid mx-auto teas-crd-wrap">
            {selectedTeasers?.length > 0 &&
              selectedTeasers?.map(
                ({
                  featured_image,
                  id,
                  slug,
                  category_id,
                  sub_category,
                  post_description,
                }) => {
                  // selectedTeasers.slice(7,11).map((teaser) => {
                  // const { featured_image, id, slug, category_id } = selectedTeaser;
                  return (
                    <TeaserCard
                      key={id}
                      featured_image={featured_image}
                      slug={slug}
                      category_id={category_id}
                      sub_category={sub_category}
                      post_description={post_description}
                    />
                  );
                }
              )}
          </div>
        )}
      </div>
    </React.Fragment>
  );
};

export default TeaserSection;
