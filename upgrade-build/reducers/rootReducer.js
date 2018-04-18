import {bookreducer} from "./book-reducer";

import {combineReducers} from 'redux'


export const rootReducer = combineReducers({
    books : bookreducer
})

  
