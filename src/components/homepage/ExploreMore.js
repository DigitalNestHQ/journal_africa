import React from 'react';
import { Link } from 'react-router-dom';

export const ExploreMore = (props) => {
    return (
        <React.Fragment>
            <div className="row container">
                <Link className="col-12 text-danger"
                style={{whiteSpace: 'nowrap'}}
                      to={{
                      pathname: "/news/categories",
                      search: `?category=${props.category_id}`,
                }}>Explore more...</Link>
            </div>
        </React.Fragment>
    )
}
