{
}
{
}

//action type
export const ADD_MOVIES = "ADD_MOVIES";
export const ADD_TO_FAVOURATES = "ADD_TO_FAVOURATES";
export const REMOVE_FROM_FAVOURATES = "REMOVE_FROM_FAVOURATES";
export const SET_SHOW_FAVOURATES = "SET_SHOW_FAVOURATES";
export const ADD_MOVIE_TO_LIST = "ADD_MOVIE_TO_LIST";
export const ADD_SEARCH_RESULT = "ADD_SEARCH_RESULT";

//action creators
export function addMovies(movies) {
  return {
    type: ADD_MOVIES,
    movies,
  };
}
export function addToFavourate(movie) {
  return {
    type: ADD_TO_FAVOURATES,
    movie,
  };
}
export function removeFromFavourates(movie) {
  return {
    type: REMOVE_FROM_FAVOURATES,
    movie,
  };
}
export function setShowFavourates(val) {
  return {
    type: SET_SHOW_FAVOURATES,
    val,
  };
}
export function addMovieToList(movie) {
  return {
    type: ADD_MOVIE_TO_LIST,
    movie,
  };
}
export function handleMovieSearch(movie) {
  const url = `https://omdbapi.com/?apikey=21d5f780&t=${movie}`;
  return function (dispatch) {
    fetch(url)
      .then((response) => response.json())
      .then((movie) => {
        console.log("movie", movie);
        //dispatch an action
        // dispatch({type : 'ADD_SEARCH_RESULT',movie})
        dispatch(addMovieSearchResult(movie));
      });
  };
}

export function addMovieSearchResult(movie) {
  return {
    type: ADD_SEARCH_RESULT,
    movie,
  };
}
