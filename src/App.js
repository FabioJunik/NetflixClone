import React, {useEffect, useState} from 'react';
import getHomeList from './Tmdb';
import MovieRow from './components/movieRow/movieRow';

const App = () =>{
    const [movieList, setMovieList] = useState([]);
    useEffect(()=>{
        const loadAll = async ()=>{
            let list = await getHomeList();
            console.log(list)
            setMovieList(list);
            console.log(movieList)  
        }
     
        loadAll();

    },[]);    

    return (
       <div className='page'>
           <section className='lists'>
               {movieList.map((item, key)=>(
                    <MovieRow key={key}  title={item.title} items={item.items} />
               ))}
           </section>
       </div>
    );

}

export default  App