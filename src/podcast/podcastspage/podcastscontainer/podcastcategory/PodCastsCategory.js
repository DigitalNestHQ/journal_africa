import React from 'react';
import { Card } from 'react-bootstrap';
import { PodCastAds } from '../../../podcastads/PodCastAds';
import bigImage from './../../../../assets/images/burna-podcast.png';
import './podcastscategory.css'

export const PodCastsCategory = () => {
    const cast = {
        title: "Burna Buy: I deserved to win Grammy",
        p1: "The Top 10 Magazine, a monthly magazine with focus on celebrating top 10 leading lights from every sectors of the society has released the list of Nigeria’s ICT Top 10.",
        p2:`The list is contained in the latest edition of the magazine which is dedicated to top 10 pillars of Nigeria’s ICT revolution.
        The list is contained in the latest edition of the magazine which is dedicated to top 10 pillars of Nigeria’s ICT revolution.`
    }
    const podcat = Array(5).fill(cast)
    return (
        <React.Fragment>
            <section className="podcast_category_container">
                <div className="row">
                    <div className="col-12 col-md-12 col-lg-9">
                        <h1 className="pod_category_heading">Digital Podcast</h1>
                        {
                            podcat.map(({title, p1, p2})=>{
                                return(
                                    <React.Fragment>
                                        <div className="pod_card row pt-4">
                                            <div key={title} className="pod_card_image col-12 col-md-5 col-lg-5">
                                                <Card>
                                                    <Card.Img
                                                    src={bigImage}
                                                    alt="Card image"
                                                    className=""
                                                    />
                                                    <Card.ImgOverlay className="pod_image_overlay">
                                                        <Card.Text>
                                                            {title}
                                                        </Card.Text>
                                                    </Card.ImgOverlay>
                                                </Card>
                                            </div>
                                            <div className="col-12 col-md-7 col-lg-7 p-0 right_side_contents">
                                                <div className="pod_long_description pt-3">
                
                                                    <p>{p1}</p>
                                                    <p>{p2}</p>
                                                    <div class="pod_buttons">
                                                        <button className="play_latest_btn"><i className="fas fa-play"></i> Play Latest episode</button>
                                                        <button className="sub_topod_btn">Subscribe <span className="">V</span></button>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="hr_lines col-12">
                                                <hr className="pod_hr_line " />
                                                <p>
                                                    ALL EPISODES &#62;
                                                </p>
                                                <hr className="pod_hr_line taller" />
                                            </div>
                                        </div>
                                    </React.Fragment>
                                )
                            })
                        }
                    </div>
                    <div className="col-12 col-lg-3 podcast_right_ads">
                       <PodCastAds />
                    </div>
                </div>
            </section>
        </React.Fragment>
    )
}
