import React, {useEffect} from 'react';
import Tmdb from './Tmdb';

const App = () =>{
    useEffect(()=>{
        const loadAll = async ()=>{
            let list = await Tmdb.getHomeList();
            console.log(list)
        }

        loadAll();

    },[]);    
    return (
        <div>
            Executando
        </div>
    );

}

export default  App