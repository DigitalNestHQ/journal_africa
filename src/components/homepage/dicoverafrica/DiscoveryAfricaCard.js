import React from 'react';
import { Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export const DiscoveryAfricaCard = ({
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
                <Link to={`/post/${slug}`} className="af-crd-anc-bt">
                <div>
                <Image variant="top" src={`https://api.tv24africa.com/public/storage/post_image/${featured_image}` } className="da_img" />
                </div>
                  <div className="af-crd-lst">
                      {
                          post_type === 'premium' ?(
                              <span>PREMIUM</span>
                          ):(<span className="text-white">Free</span>)
                      }
                    <p>
                      {/* Inside Calabar Carnival, africa's biggest street party */}
                      { post_title }
                    </p>
                  </div>
                </Link>
              </div>
        </React.Fragment>
    )
}
