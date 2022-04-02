import React from "react";
import './movieRow.css';

const MovieRow = ({title, items} ) =>{
    return(
        <div >
            <h2>{title}</h2>
            <div className='movieRow_listArea'>
                {items.results.length > 0 && items.results.map((item, key)=>(
                    <img src={`https://image.tmdb.org/t/p/w300${item.poster_path}`} alt="capa"/>
                ))}
            </div>
        </div>
   )
}
export default MovieRow;