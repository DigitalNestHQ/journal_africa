import React from "react";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
const TeaserCard = ({ featured_image, id, slug, category_id }) => {
  return (
    <div className="col-12 col-md-12 col-lg-3 mb-3 b-sm-2 ts-card-wrap" data-as="fade-right">
      <Link
        to={{
          pathname: "/news/categories",
          search: `?category=${category_id}`,
        }}
      >
        <Card className="text-white mt-wrap h-100">
          <Card.Img
            src={`https://api.tv24africa.com/public/storage/post_image/${featured_image}`}
            alt="Card image"
            className="h-100"
          />
          <Card.ImgOverlay className="m-t text-center d-flex justify-content-end flex-column align-items-center ts-oerlay" style={{height: "100%",background: "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.6)"}}>
            <Button variant="outline-danger" className="butn">
              {category_id}
            </Button>
            <Card.Text className="ts-card-txt" style={{zIndex:"200"}}>
              <Link to={`/post/${slug}`} className="ts-card-txt text-white" style={{height: '100px'}}>
                {slug.toLowerCase()}
              </Link>
            </Card.Text>
          </Card.ImgOverlay>
        </Card>
      </Link>
    </div>
  );
};

export default TeaserCard;
