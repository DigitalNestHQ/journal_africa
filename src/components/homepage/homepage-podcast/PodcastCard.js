import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import audioImage from './audio.svg';

export const PodcastCard = () => {
    const history = useHistory();
    return (
        <React.Fragment>
            <section className="custom-container homepage-podcast">
                <div className="homepage-podcast--heading">
                    <h1>Podcasts</h1>
                </div>
                <div className="row d-flex homepage-podcast--wrapper">
                        <div className="col-12 col-md-6 col-lg-6 homepage-podcast--card" onClick={()=>history.push("/podcast")}>
                            <div className="homepage-podcast--image">
                                <img src="https://api.tv24africa.com/public/storage/post_image/Babajide-Sanwo-Olu-1-e1587228624596.jpg_1621801498.webp" alt="podcast avatar"/>
                            </div>
                            <div className="homepage-podcast--description">
                                <div className="d-fex justify-content-between align-items-center">
                                    <img className="d-block audio-svg-icon" src={audioImage}/>
                                    <span>Wearing of face-mask now compulsory in Lagos - Governor</span>
                                </div>
                                <p className="d-none d-lg-block desc">In line with the COVID-19 Health Protection Regulations, 2021 signed last week by Presi...</p>
                                <strong>10min read</strong>
                            </div>
                        </div>

                    {/* <Link to="/podcast"> */}
                        <div className="col-12 col-md-6 col-lg-6 homepage-podcast--card" onClick={()=>history.push("/podcast")}>
                            <div className="homepage-podcast--image">
                                <img src="https://api.tv24africa.com/public/storage/post_image/MikeAdenuga-e1456251801623_1620305200.jpg" alt="podcast avatar"/>
                            </div>
                            <div className="homepage-podcast--description">
                                <div className="d-flx justify-content-between align-items-center">
                                    <img className="d-block audio-svg-icon" src={audioImage}/>
                                    <span>Adenuga, Ovia, Eke, Aledekomo, Others Named Nigeria's ICT Top 10</span>
                                </div>
                                <p className="d-none d-lg-block desc">The Top 10 Magazine, a monthly magazine with focus on celebrating top 10 leading lights from every</p>
                                <strong>2min read</strong>
                            </div>
                        </div>
                    {/* </Link> */}
                </div>
            </section>
        </React.Fragment>
    )
}
