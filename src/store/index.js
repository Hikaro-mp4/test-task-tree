import {createStore, combineReducers } from "redux";

import {treeReducer} from './TreeReducer'

const rootReducer=combineReducers({
    tree:treeReducer
})

export const store=createStore(rootReducer)