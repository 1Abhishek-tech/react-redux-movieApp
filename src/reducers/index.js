import { ADD_MOVIES ,ADD_TO_FAVOURATES , REMOVE_FROM_FAVOURATES, SET_SHOW_FAVOURATES ,ADD_MOVIE_TO_LIST ,ADD_SEARCH_RESULT } from "../actions";
import { combineReducers } from "redux";

const initialMoviesState = {
    list : [],
    favourates : [],
    showFavourates : false
}
export function movies (state = initialMoviesState , action){
    // if(action.type === ADD_MOVIES){
    //     return {
    //         ...state,
    //         list : action.movies 
    //     }
    // }
    // return state;
    switch(action.type){
        case ADD_MOVIES : 
            return {
                ...state,
                list : action.movies
            }
        case ADD_TO_FAVOURATES :
            return {
                ...state,
                favourates : [action.movie, ...state.favourates]
            }
        case REMOVE_FROM_FAVOURATES :
            const filteredArray = state.favourates.filter(
                movie => movie.Title !== action.movie.Title
            )
            return {
            ...state,
            favourates : filteredArray
            }
        case SET_SHOW_FAVOURATES : 
            return {
                ...state,
                showFavourates : action.val
            }
        case ADD_MOVIE_TO_LIST : 
            return {
                ...state,
                list : [action.movie , ...state.list]
            }
        default : 
            return state
            
    }
}
const initialSearchState ={
    result : { },
    showSearchResults : false
}

export function search(state = initialSearchState, action){
    switch(action.type ){
        case ADD_SEARCH_RESULT : 
        return {
            ...state,
            result : action.movie,
            showSearchResults : true
        }
    case ADD_MOVIE_TO_LIST :
        return {
            ...state,
            showSearchResults : false
        }
    default : 
        return state       
}
}

// const initailRootState ={
//     movies : initialMoviesState,
//     search : initialSearchState
// } 
// export default function rootReducer(state = initailRootState , action){
//     return{
//         movies : movies(state.movies , action),
//         search : search(state.search , action)
//     }
// }

export default combineReducers({
    movies : movies,
    // search : search
    search 
})