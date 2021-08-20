import React from "react";
import { addToFavourate , removeFromFavourates} from "../actions";
import {connect} from 'react-redux'

class MovieCard extends React.Component{
    handleFavourateClick=()=>{
        const { movie } = this.props;
        this.props.dispatch(addToFavourate(movie))
    }
    handleUnFavourateClick=()=>{
        const {movie} = this.props
        this.props.dispatch(removeFromFavourates(movie))
    }
    render(){
        const {movie , isFavourate} = this.props
        return(
            
            <div className="movie-card">
               <div className="left">
                    <img src={movie.Poster} alt="movie-poster"/>
               </div>
               <div className="right">
               <div className="title">{movie.Title }</div>
               <div className="plot">{movie.Plot }</div>
               <div className="footer">
               <div className="rating">{movie.imdbRating }</div>
               {
                isFavourate 
                ? <button className="unfavourite-btn " onClick={this.handleUnFavourateClick} >Unfavourate</button>
                : <button className="favourite-btn " onClick={this.handleFavourateClick} >Favourate</button>
               }
               </div>
               </div>
            </div>
        )
    }
}
function mapStateToProps({movies}) {
    return{
        movies,
    }
}
export default connect(mapStateToProps)(MovieCard);