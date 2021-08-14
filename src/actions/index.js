{

}
{
    
}

//action type
export const ADD_MOVIES = 'ADD_MOVIES'
export const ADD_TO_FAVOURATES = 'ADD_TO_FAVOURATES'
export const REMOVE_FROM_FAVOURATES = 'REMOVE_FROM_FAVOURATES'
export const SET_SHOW_FAVOURATES = 'SET_SHOW_FAVOURATES'
export const ADD_MOVIE_TO_LIST = 'ADD_MOVIE_TO_LIST'

//action creators
export function addMovies(movies){
    return {
        type : ADD_MOVIES,
        movies 
    }
}
export function addToFavourate(movie){
    return {
        type : ADD_TO_FAVOURATES,
        movie 
    }
}
export function removeFromFavourates(movie){
    return {
        type : REMOVE_FROM_FAVOURATES,
        movie 
    }
}
export function setShowFavourates(val){
    return {
        type : SET_SHOW_FAVOURATES,
        val 
    }
}