import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from 'redux-thunk'
import { toDoReducer } from "./reducers/toDoReducer";

const reducer = combineReducers({
    Todo:toDoReducer
})

const initialState= {};

const middleware = [thunk];

const store = createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware)) 
)

export default store;