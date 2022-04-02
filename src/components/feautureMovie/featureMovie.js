import React from "react";
import './featureMovie.css'

const FeatureMovie = ({item})=>{
    return(
        <section className='feature'>
            <div>{item.original_name}</div>
        </section>
    );
}

export default FeatureMovie;