import { createStore, applyMiddleware, combineReducers, compose } from "redux";
import { userLoginReducer, userRegisterReducer } from "./store/userReducers";
import { postsReducer } from "./store/postsReducer";
import thunk from "redux-thunk";

const reducer = combineReducers({
	userLogin: userLoginReducer,
	userRegister: userRegisterReducer,
	postsReducer: postsReducer,
});

const userInfoFromStorage = localStorage.getItem("userInfo")
	? JSON.parse(localStorage.getItem("userInfo"))
	: null;

const initialState = {
	userLogin: { userInfo: userInfoFromStorage },
};

// const middleware = [thunk];
// const store = createStore(
// 	reducer,
// 	initialState,
// 	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// );

// export default store;

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const middleware = composeEnhancers(applyMiddleware(thunk));

const store = createStore(reducer, [middleware]);

export default store;
