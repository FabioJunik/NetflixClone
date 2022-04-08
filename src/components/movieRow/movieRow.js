import React, {useState} from "react";
import './movieRow.css';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';

const MovieRow = ({title, items} ) =>{
    const [scrollX, setScrollX] = useState(-400);
    const handleLeftArrow = () =>{
        let scrollXValue = scrollX + Math.round(window.innerWidth /2);
        if(scrollXValue > 0)
            scrollXValue=0;
        setScrollX(scrollXValue)
    }

    const handleRightArrow = () =>{
        let scrollXValue = scrollX - Math.round(window.innerWidth /2);
        let listWidth =  items.results.length * 150;
        
        if((window.innerWidth - listWidth) > scrollXValue){
            scrollXValue = window.innerWidth - listWidth - 30;
            console.log(scrollXValue);
        }
        setScrollX(scrollXValue)
    }
    return(
        <div className="movieRow">
            <h2>{title}</h2>
            <div className="movieRowLeft" onClick={handleLeftArrow}>
                <NavigateBeforeIcon style={{fontSize:'50px'}}/>
            </div>
            <div className="movieRowRight" onClick={handleRightArrow}>
                <NavigateNextIcon style={{fontSize:'50px'}}/>
            </div>
            <div className='movieRow_listArea'>
                <div className="movieRow_list" style={{
                    marginLeft: scrollX,
                    width: items.results.length * 150
                }}>
                    {items.results.length > 0 && items.results.map((item, key)=>(
                        <div className="movieRow_item">
                            <img src={`https://image.tmdb.org/t/p/w300${item.poster_path}`} alt={item.original_title}/>
                        </div>
                    ))}
                </div>
                
            </div>
        </div>
   )
}
export default MovieRow;