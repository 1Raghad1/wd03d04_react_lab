import React from 'react'
const FilmRow = (props) => {
   var year = new Date(props.date );
    return (

        <div className = 'film-row'>
        <img src = {`https://image.tmdb.org/t/p/w780/${props.poster}`} />
        <div className = ' film-summary' >
        <h3>{props.item}</h3>
       
        <p>{year.getFullYear()}</p> 
        </div>
   </div> 
   )
}

export default FilmRow