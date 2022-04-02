const API_KEY = '61a4a4df54931b084db9eeb3ddc96c2c';
const API_BASE = 'https://api.themoviedb.org/3';

//https://api.themoviedb.org/3/tv/85552?language=pt-BR&api_key=61a4a4df54931b084db9eeb3ddc96c2c

const basicFetch = async (endpoint)=>{
    const req = await fetch(`${API_BASE}${endpoint}`);
    const json = await req.json();
    return json;
}

const getHomeList = async()=>{
    return[
        {
            slug:'originais',
            title: 'Originais da NetFlix',
            items: await basicFetch(`/discover/tv?with_network=213&language=pt-BR&api_key=${API_KEY}`)
        },
        {
            slug:'trading',
            title: 'Recomendados para você',
            items: await basicFetch(`/trending/all/week?language=pt-BR&api_key=${API_KEY}`)
        },
        {
            slug:'toprated',
            title: 'Em alta',
            items: await basicFetch(`/movie/top_rated?language=pt-BR&api_key=${API_KEY}`)
        },
        {
            slug:'action',
            title: 'Ação',
            items: await basicFetch(`/discover/movie?with_genres=28&language=pt-BR&api_key=${API_KEY}`)
            
        },
        {
            slug:'comedy',
            title: 'Comédia',
            items: await basicFetch(`/discover/movie?with_genres=35&language=pt-BR&api_key=${API_KEY}`)
        },
        {
            slug:'horror',
            title: 'Terror',
            items: await basicFetch(`/discover/movie?with_genres=27&language=pt-BR&api_key=${API_KEY}`)
        },
        {
            slug:'romance',
            title: 'Romance',
            items: await basicFetch(`/discover/movie?with_genres=10749&language=pt-BR&api_key=${API_KEY}`)
        },
        {
            slug:'documentary',
            title: 'Documentario',
            items: await basicFetch(`/discover/movie?with_genres=99&language=pt-BR&api_key=${API_KEY}`)
        }
    ];
}

const getMovieInfo = async (movieId, type)=>{
    let info;
    let typeRigth = type === 'movie'? 'movie': 'tv';

    info = await basicFetch(`/${typeRigth}/${movieId}?language=pt-BR&api_key=${API_KEY}`);

    return info;
}
export {getHomeList, getMovieInfo};