import React from "react";
import './featureMovie.css'

const FeatureMovie = ({item})=>{
    return(
        <section className='featured' style={{backgroundImage:`url(http://image.tmdb.org/t/p/original${item.backdrop_path})`}}>
            <div>{item.original_name} {console.log(item.backdrop_path)}</div>
        </section>
    );
}

export default FeatureMovie;