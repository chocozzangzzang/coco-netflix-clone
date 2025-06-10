import React from 'react'
import "./RelatedMoviesPage.style.css";

const RelatedMoviesPage = ({ similars }) => {
    return (
        <div className='related-movies-wrapper'>
            {similars.map((similar) => 
                {   
                    return similar.backdrop_path ?
                    <div style={{display : 'flex', justifyContent : "center"}}>
                        <img src={`https://image.tmdb.org/t/p/w355_and_h200_multi_faces/${similar.backdrop_path}`}/>
                    </div> :
                    null
                }
                
            )}
        </div>
    )
}

export default RelatedMoviesPage