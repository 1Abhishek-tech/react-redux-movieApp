import { ADD_MOVIES } from "../actions";

const initialMovieState = {
    list : [],
    favourate : []
}
export default function movies (state = initialMovieState , action){
    if(action.type === ADD_MOVIES){
        return {
            ...state,
            list : action.movies 
        }
    }
    return state;
}