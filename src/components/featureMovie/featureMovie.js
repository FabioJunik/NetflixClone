import React from "react";
import './featureMovie.css'

const FeatureMovie = ({item})=>{
    const firstDate = new Date(item.first_air_date);
    let genres = [];
    
    for(let i in item.genres){
        genres.push(item.genres[i].name);
    }

    // let description = item.overview;

    // if(description.length > 250)
    //     description = description.substring(0,250)

    // const genres = item.genres.map(genre=> {console.log(genre)});
    // console.log(genres);
    return(
        <section className='featured' style={{backgroundImage:`url(http://image.tmdb.org/t/p/original${item.backdrop_path})`}} >
            <div className="featuredVertical">
                <div className="featuredHorizontal">
                    <h1>{item.original_name}</h1>
                    <div className="featuredInfo">
                        <span className="points">{item.vote_average} pontos</span>
                        <span>{firstDate.getFullYear()}</span>
                        <span>{item.number_of_seasons} temporada{item.number_of_seasons !== 1?'s':''}</span>
                    </div>
                    <div className="featuredDescription">
                        {item.overview}
                    </div>
                    <div className="featuredButtons">
                        <a href={`/watch/${item.id}`} className="watch"> Assistir</a>
                        <a href={`/list/add/${item.id}`} className="myList">+ Minha lista</a>
                    </div>
                    <div className="featuredGenres">
                        <strong>Generos: </strong>
                        {genres.join(', ')}
                    </div>
                    {console.log(item)}
                </div>
            </div>
        </section>
    );
}

export default FeatureMovie;