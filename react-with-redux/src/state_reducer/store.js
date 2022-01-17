import { createStore, applyMiddleware } from "redux";
import reducers from "./reducers/index";
import thunk from "redux-thunk"; //actuall thunk middleware

// we aren't really not doing any asynchronous. however when we go to actionCreators we are calling the
//dispatch function and that right there is asynchronous and in order to help redux to work with
//Async requests we can use a library known as redux-thunk
//we have to pass applymiddleware parameter after installing redux-thunk
export const store = createStore(
    reducers,
    {}, //default empty state
    applyMiddleware(thunk)
)
