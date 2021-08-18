import React from "react";
import {data} from '../data'
import Navbar from "./Navbar";
import MovieCard from "./MovieCard";
import {addMovies, setShowFavourates} from "../actions";

class App extends React.Component {
  
  // constructor(){
  //   super()
  //   this.state={
  //     FavMovie : false
  //   }
  // }
  componentDidMount(){
    const {store}= this.props
    store.subscribe(()=>{
      console.log('Updated')
      this.forceUpdate()
    })
    // by making an api call
    //Using dispatch action
    store.dispatch(addMovies(data))
    // store.dispatch({
    //   type : 'ADD_MOVIES',
    //   movies : data 
    // })
    console.log(this.props.store.getState())
  }

  isMovieFavourates=(movie)=>{
    const {movies} = this.props.store.getState()
    const index = movies.favourates.indexOf(movie)
    if(index !== -1){
      //found the movie
      return true;
    }
    return false;
  }
 onChangeTab=(val)=>{
   this.props.store.dispatch(setShowFavourates(val))
 }
  

  render(){
    const {movies , search} = this.props.store.getState();  // { movies , search }
    const { list , favourates ,showFavourates } = movies;  // list : [], favourates : []
    console.log('render',this.props.store.getState())
    const displayMovies = showFavourates ? favourates : list;
  return (
    <div className="App">
      <Navbar dispatch ={ this.props.store.dispatch } search ={search}/>
      <div className="main">
        <div className="tabs">
          <div className={`tab ${showFavourates?'':'active-tabs' }`} onClick={() => this.onChangeTab(false)} >Movies</div>
          <div className={`tab ${showFavourates?'active-tabs' :'' }`} onClick={() => this.onChangeTab(true)}>Favourates</div>
        </div>
        <div className="list">
        {/* {list.map((movie, index) =>(
            <MovieCard movie={movie} key={`movies-${index}`} dispatch={this.props.store.dispatch } isFavourate={this.isMovieFavourates(movie)} />
            ))} */}
        {displayMovies.map((movie, index) =>(
            <MovieCard movie={movie} key={`movies-${index}`} dispatch={this.props.store.dispatch } isFavourate={this.isMovieFavourates(movie)} />
            ))}
          
        </div>
        {displayMovies.length === 0 ?<div className="no-movies">No movies to Display</div>:null }
      </div>
    </div>
  );
}}

export default App;
