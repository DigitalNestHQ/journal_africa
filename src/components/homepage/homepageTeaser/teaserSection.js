import React from "react";
import TeaserCard from "./TeaserCard";
import "../homepage.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { LargeSizeAds } from "../ads/Ads";
import largeAds from "./../../../assets/images/largeads.png"

const TeaserSection = (props) => {
  const teasers = props.data;
  // get all the category to be displayed
  const discoverAfricaTeaser = teasers.filter((post)=>post.category_id === "Discovery Africa")
  const ecoAfricaTeaser = teasers.filter((post)=>post.category_id === "Economy")
  const techAfricaTeaser = teasers.filter((post)=>post.category_id === "Tech Africa")
  const sportAfricaTeaser = teasers.filter((post)=>post.category_id === "Sport Africa")
  // select 1 from each category
  const selectedTeasers = [discoverAfricaTeaser[0], ecoAfricaTeaser[0], techAfricaTeaser[0], sportAfricaTeaser[0]] || [{}]

  AOS.init();
  if(typeof selectedTeasers[0] === "undefined"){return null}
  return (
    <React.Fragment>
      <div className="custom-container container-fluid">
        <div className="col-12 mb-5">
          <LargeSizeAds img={largeAds}/>
        </div>
      </div>
      <div
        className="teaser mt-3 mb-3 mx-auto"
        data-aos="fade-up"
        data-aos-delay="100"
        data-aos-duration="1500"
        >
        {selectedTeasers && 
        <div className="custom-container row container-fluid mx-auto teas-crd-wrap">
          {selectedTeasers?.length > 0 &&
            selectedTeasers?.map(({featured_image, id, slug, category_id, post_description}) => {
              // selectedTeasers.slice(7,11).map((teaser) => {
              // const { featured_image, id, slug, category_id } = selectedTeaser;
              return (
                <TeaserCard
                key={id}
                featured_image={featured_image}
                slug={slug}
                category_id={category_id}
                post_description={post_description}
                />
                );
              })}
        </div>}
      </div>
    </React.Fragment>
  );
};

export default TeaserSection;
