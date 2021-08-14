import { ADD_MOVIES ,ADD_TO_FAVOURATES , REMOVE_FROM_FAVOURATES, SET_SHOW_FAVOURATES} from "../actions";

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
        default : 
            return state
            
    }
}
const initialSearchState ={
    result : { }
}

export function search(state = initialSearchState, action){
    return state;
}

const initailRootState ={
    movies : initialMoviesState,
    search : initialSearchState
} 
export default function rootReducer(state = initailRootState , action){
    return{
        movies : movies(state.movies , action),
        search : search(state.search , action)
    }
}