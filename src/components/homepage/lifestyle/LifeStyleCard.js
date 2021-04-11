import React from 'react'
import { Card } from 'react-bootstrap'
import { HtmlParseOptions } from '../../../_helper/parseNewsHtml'
import ReactHtmlParser, {
} from "react-html-parser";
import { Link } from 'react-router-dom';
export const LifeStyleCard = ({ 
  post_title, 
  featured_image, 
  slug, 
  category_id, 
  post_type, 
  post_description }) => {
    const getAllParagraphs = post_description.split("</p>")
    const firstParagraph = getAllParagraphs[0];
    let html;
    if(post_description){
      html = `${firstParagraph.slice(0, 100)}...`
    }
    return (
        <>
            <div className="col-12 col-md-3 col-lg-3 lifestyle-sq lifestyle-sq-1">
              <a href="/" className="tch-anchor">
                 <Card className="lifestyle-crd px-3 px-lg-0">
                  <Card.Img
                    variant="top"
                    // src={Telescope}
                    src={`https://api.tv24africa.com/public/storage/post_image/${featured_image}`}

                    className="lifestyle-crd-img"
                  />
                  <Card.Body>
                    <Card.Text className="lifestyle-crd-caption custom-news-title pl-2" style={{height: '100px'}}>
                      {/* The secret to moving this ancient sphinx screening */}
                      {/* {slug} */}
                      {/* what does that mean --second frontend dev? */}
                      <div className="lifestyle-text">
                      <Link to={`/post/${slug}`} className="lifestyle-heading">{post_title}</Link>
                      <Link to={`/post/${slug}`} className="lifestyle-description">
                        {ReactHtmlParser(html, HtmlParseOptions)}
                      </Link>
                    </div>
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
                    <lifestyleAfricaCard
                    post_title={post_title}
                    id={id}
                    featured_image={featured_image}
                    slug={slug}
                    category_id={category_id}
                    
                    />
                  )
                }
              } */}
            // <div className="col-12 col-lg-3 lifestyle-sq lifestyle-sq-1">
            //   <a href="/" className="tch-anchor">
            //     <Card className="lifestyle-crd px-3 px-lg-0">
            //       <Card.Img
            //         variant="top"
            //         src={Telescope}
            //         // src={`https://api.tv24africa.com/public/storage/post_image/${featured_image}`}

            //         className="lifestyle-crd-img"
            //       />
            //       <Card.Body>
            //         <Card.Text className="lifestyle-crd-caption  p-2">
            //           The secret to moving this ancient sphinx screening
            //         </Card.Text>
            //       </Card.Body>
            //     </Card>
            //   </a>
            // </div>
            // <div className="col-12 col-lg-3 lifestyle-sq lifestyle-sq-">
            //   <a href="/" className="tch-anchor">
            //     <Card className="lifestyle-crd px-3 px-lg-0">
            //       <Card.Img
            //         variant="top"
            //         src={Microscope}
            //         className="lifestyle-crd-img"
            //       />
            //       <Card.Body>
            //         <Card.Text className="lifestyle-crd-caption  p-2">
            //           How Lab Courses Can Teach More Than Science
            //         </Card.Text>
            //       </Card.Body>
            //     </Card>
            //   </a>
            // </div>
            // <div className="col-12 col-lg-3 lifestyle-sq lifestyle-sq-3">
            //   <a href="/" className="tch-anchor">
            //     <Card className="lifestyle-crd px-3 px-lg-0">
            //       <Card.Img
            //         variant="top"
            //         src={Truck}
            //         className="lifestyle-crd-img"
            //       />
            //       <Card.Body>
            //         <Card.Text className="lifestyle-crd-caption p-2">
            //           Elon Musk unveils Tesla's Cybertruck electric off-road
            //           vehicle
            //         </Card.Text>
            //       </Card.Body>
            //     </Card>
            //   </a>
            // </div>
          // </div>
          // <div className="lifestyle-top-right left-equiv d-none d-lg-block"></div>
      //   </div>
      //   </div>
      // </div>