import React from "react";
import {data} from '../data'
import Navbar from "./Navbar";
import MovieCard from "./MovieCard";
import {addMovies, setShowFavourates} from "../actions";

class App extends React.Component {
  
  constructor(){
    super()
    this.state={
      FavMovie : false
    }
  }
  componentDidMount(){
    const {store}= this.props
    store.subscribe(()=>{
      console.log('Updated')
      this.forceUpdate()
    })
    // by making an api call
    //Using dispatch action
    this.props.store.dispatch(addMovies(data))
    // store.dispatch({
    //   type : 'ADD_MOVIES',
    //   movies : data 
    // })
    console.log(this.props.store.getState())
  }

  isMovieFavourates=(movie)=>{
    const {favourates } = this.props.store.getState()
    const index = favourates.indexOf(movie)
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
    // const movies = this.props.store.getState();
    const { list , favourates ,showFavourates } = this.props.store.getState();  // list : [], favourates : []
    console.log('render',this.props.store.getState())
    const displayMovies = showFavourates ? favourates : list;
  return (
    <div className="App">
      <Navbar/>
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
      </div>
    </div>
  );
}}

export default App;
