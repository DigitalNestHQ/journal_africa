import React from 'react'
import { Card } from 'react-bootstrap'

export const TechAfricaCard = ({ post_title, featured_image, slug, category_id, post_type }) => {
    return (
        <>
            <div className="col-12 col-lg-3 tech-sq tech-sq-1">
              <a href="/" className="tch-anchor">
                 <Card className="tech-crd px-3 px-lg-0">
                  <Card.Img
                    variant="top"
                    // src={Telescope}
                    src={`https://api.tv24africa.com/public/storage/post_image/${featured_image}`}

                    className="tech-crd-img"
                  />
                  <Card.Body>
                    <Card.Text className="tech-crd-caption  p-2" style={{height: '100px'}}>
                      {/* The secret to moving this ancient sphinx screening */}
                      {slug}
                    </Card.Text>
                  </Card.Body>
                </Card>
              </a>
            </div>
        </>
    )
}





{/* {
              sportNews && sportNews.length > 0 && sportNews.map((news) => {
                  const {
                    post_title,
                    id,
                    featured_image,
                    slug,
                    category_id,
                  } = news;
                  return (
                    <TechAfricaCard
                    post_title={post_title}
                    id={id}
                    featured_image={featured_image}
                    slug={slug}
                    category_id={category_id}
                    
                    />
                  )
                }
              } */}
            // <div className="col-12 col-lg-3 tech-sq tech-sq-1">
            //   <a href="/" className="tch-anchor">
            //     <Card className="tech-crd px-3 px-lg-0">
            //       <Card.Img
            //         variant="top"
            //         src={Telescope}
            //         // src={`https://api.tv24africa.com/public/storage/post_image/${featured_image}`}

            //         className="tech-crd-img"
            //       />
            //       <Card.Body>
            //         <Card.Text className="tech-crd-caption  p-2">
            //           The secret to moving this ancient sphinx screening
            //         </Card.Text>
            //       </Card.Body>
            //     </Card>
            //   </a>
            // </div>
            // <div className="col-12 col-lg-3 tech-sq tech-sq-">
            //   <a href="/" className="tch-anchor">
            //     <Card className="tech-crd px-3 px-lg-0">
            //       <Card.Img
            //         variant="top"
            //         src={Microscope}
            //         className="tech-crd-img"
            //       />
            //       <Card.Body>
            //         <Card.Text className="tech-crd-caption  p-2">
            //           How Lab Courses Can Teach More Than Science
            //         </Card.Text>
            //       </Card.Body>
            //     </Card>
            //   </a>
            // </div>
            // <div className="col-12 col-lg-3 tech-sq tech-sq-3">
            //   <a href="/" className="tch-anchor">
            //     <Card className="tech-crd px-3 px-lg-0">
            //       <Card.Img
            //         variant="top"
            //         src={Truck}
            //         className="tech-crd-img"
            //       />
            //       <Card.Body>
            //         <Card.Text className="tech-crd-caption p-2">
            //           Elon Musk unveils Tesla's Cybertruck electric off-road
            //           vehicle
            //         </Card.Text>
            //       </Card.Body>
            //     </Card>
            //   </a>
            // </div>
          // </div>
          // <div className="tech-top-right left-equiv d-none d-lg-block"></div>
      //   </div>
      //   </div>
      // </div>