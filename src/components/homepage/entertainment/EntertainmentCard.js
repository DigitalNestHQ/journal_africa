import React from 'react';
import { Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export const EntertainmentCard = ({
    post_title,
    featured_image,
    id,
    post_type,
    slug,
    category_id,
}) => {
    return (
        <React.Fragment>
            <div className="col-6 col-md-6 col-lg-6 mx-auto my- my-md-2 my-lg-2 cal_3">
                <Link to={`/post/${slug}`} className="entertainment-crd-anc-bt">
                <div>
                <Image variant="top" src={`https://api.tv24africa.com/public/storage/post_image/${featured_image}` } className="entertainment-card-img" />
                </div>
                  <div className="entertainment-crd-lst">
                      {
                          post_type === 'premium' ? (
                            <span className="premium-tag premium_category_indicator--entertainment">PREMIUM</span>
                          ):(
                            null
                            // <span className="free-tag premium_category_indicator--entertainment">Free</span>
                          )
                      }
                    <section className="entertainment-description">
                      <p>
                        { post_title }
                      </p>
                    </section>
                  </div>
                </Link>
              </div>
        </React.Fragment>
    )
}
