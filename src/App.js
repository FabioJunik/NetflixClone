import React, {useEffect, useState} from 'react';
import './App.css'
import {getHomeList, getMovieInfo} from './Tmdb';
import FeatureMovie from './components/featureMovie/featureMovie';
import MovieRow from './components/movieRow/movieRow';
import Header from './components/header/header';
import Footer from './components/footer/footer'

const App = () =>{
    const [movieList, setMovieList] = useState([]);
    const [featuredData, setFeaturedData] = useState([]);
    const [blackHeader, setBlackHeader] = useState(false);

    useEffect(()=>{
        const loadAll = async ()=>{
            let list = await getHomeList();
            setMovieList(list);
            
            let originais =list.filter(item=>item.slug==='originais');
            let randomChose = Math.floor(Math.random() * (originais[0].items.results.length -1));
            let movieChosen = originais[0].items.results[randomChose];
            let infoMovieChosen = await getMovieInfo(movieChosen.id, 'tv');

            setFeaturedData(infoMovieChosen);
        }
     
        loadAll();

    },[]);    

    useEffect(()=>{
        const scrollListener = ()=>{
           setBlackHeader(window.scrollY > 10 ? true: false)    
       } 

       window.addEventListener('scroll',scrollListener);
       return ()=>{
           window.removeEventListener('scroll',scrollListener)
       }
    },[]);

    return (
       <div className='page'>
           <Header black={blackHeader}/>
           {featuredData && 
                <FeatureMovie item={featuredData}/>}
           <section className='lists'>
               {movieList.map((item, key)=>(
                    <MovieRow key={key}  title={item.title} items={item.items} />
               ))}
           </section>
            <Footer/>
            <div className='loading'>
                <img src={`https://64.media.tumblr.com/5bf8ba688ff3553b900a40dad2bbc1e0/tumblr_inline_pl93uu9rT41t9ij1a_1280.gifv`} alt='loading'/>
            </div>
       </div>
    );
}

export default  App