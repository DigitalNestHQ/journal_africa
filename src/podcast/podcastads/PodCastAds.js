import React from 'react';
import podadsImage from './../../assets/images/pod_ads.png';

const podads = Array(3).fill(podadsImage)

export const PodCastAds = () => {
    return (
        <React.Fragment>
            {
                podads.map((ads)=>{
                    return(
                        <section className="podcast_ads_wrapper">
                            <img src={ads} />
                        </section>

                    )
                })
            }
        </React.Fragment>
    )
}
