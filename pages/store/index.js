import { createStore,combineReducers,applyMiddleware,compose } from "redux";

import globalReducer from './reducers/globalReducer';


import thunk from 'redux-thunk';

const AllReducers = combineReducers({
    globalVariable: globalReducer
})

const InitialState = {
    globalVariable: {
        name: "Show Name"
    }
}


const middleWare = [thunk];


const store = createStore(AllReducers ,InitialState , applyMiddleware(...middleWare));

// window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

//use apply middleWare thunk for async function in dispatcher from front end request.
// thunk middleware will take care of functional actions.

export default store;
