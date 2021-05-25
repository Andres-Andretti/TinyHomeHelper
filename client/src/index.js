import React from "react";
import ReactDOM from "react-dom";

import "bootswatch/dist/minty/bootstrap.min.css";
import reportWebVitals from "./reportWebVitals";
import App from "./App";
import thunk from "redux-thunk";
import { Provider } from "react-redux";
import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import { authReducer } from "./store/userReducers";
import { postsReducer } from "./store/postsReducer";


const reducer = combineReducers({
	authReducer: authReducer,
	postsReducer: postsReducer,
});
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const middleware = composeEnhancers(applyMiddleware(thunk));

const store = createStore(reducer, middleware);

ReactDOM.render(
	<React.StrictMode>
		<Provider store={store}>
			<App />
		</Provider>
	</React.StrictMode>,
	document.getElementById("root")
);

reportWebVitals();
