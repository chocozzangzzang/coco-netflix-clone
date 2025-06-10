import React, { useState } from 'react'
import "./MovieReviewBox.style.css";

const MovieReviewBox = ({ review }) => {

    const [ folded, setFolded ] = useState(true);
    const foldedState = () => {
        setFolded((prev) => !prev);
    }

    return (
        <div className={folded ? 'movie-box-folded' : 'movie-box'}>
            <div style={{fontWeight : '600', fontSize : '24px'}}>{review?.author}</div>
            <div style={{overflow: 'hidden'}}>{review?.content}</div>
            <div style={{display : 'flex', justifyContent : 'flex-end'}}>{review?.created_at}</div>
            {   
                folded ?
                (<a className='folding-button' onClick={foldedState}>펼치기</a>) :
                (<a className='folding-button' onClick={foldedState}>접기</a>)
            }
        </div>
    )
}

export default MovieReviewBox