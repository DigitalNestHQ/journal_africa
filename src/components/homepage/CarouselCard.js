import React from 'react';
import {Carousel } from 'react-bootstrap';
import { Link } from "react-router-dom";
import "./homepage.css";

const CarouselCard = ({ post_title, featured_image, id, post_type, slug }) => {
    return (
        <Carousel.Item className="caro-item">
            <img 
              loading="lazy" 
              className="d-block"
              src={`https://api.tv24africa.com/public/storage/post_image/${featured_image}`} 
              alt="First slide" 

            />
            <Carousel.Caption className="caro-capxn">
              <Link
                to={`/post/${slug}`}
                className="text-decoration-none inline-block p-2 text-left cap-ancor"
              >
                {post_title}
              </Link>
              <p className="text-white text-left car-p">
               {slug}
              </p>
            </Carousel.Caption>
          </Carousel.Item>
    )
}
export default CarouselCard
