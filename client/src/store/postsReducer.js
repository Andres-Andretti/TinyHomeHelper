import {
	FETCH_ALL,
	FETCH_BY_SEARCH,
	FETCH_POST,
	CREATE,
	UPDATE,
	DELETE,
	LIKE,
	FETCH_ALL_POSTS,
} from "../constants/postActionTypes";

export const postsReducer = (
	state = { isLoading: true, posts: [] },
	action
) => {
	// state is replaced with posts as the state takes place within the posts reducer
	// cases return action.payload which is the post retrieved from api in the actions
	switch (action.type) {
		case "START_LOADING":
			return { ...state, isLoading: true };
		case "END_LOADING":
			return { ...state, isLoading: false };
		case FETCH_ALL_POSTS:
			return {
				...state,
				posts: action.payload.data,
				currentPage: action.payload.currentPage,
				numberOfPages: action.payload.numberOfPages,
			};
		case FETCH_BY_SEARCH:
			return { ...state, posts: action.payload.data };
		case FETCH_POST:
			return { ...state, post: action.payload.post };
		case LIKE:
			return {
				...state,
				posts: state.posts.map((post) =>
					post._id === action.payload._id ? action.payload : post
				),
			};
		case CREATE:
			return { ...state, posts: [...state.posts, action.payload.data] };
		case UPDATE:
			return {
				...state,
				posts: state.posts.map((post) =>
					post._id === action.payload._id ? action.payload : post
				),
			};
		case DELETE:
			return {
				...state,
				posts: state.posts.filter((post) => post._id !== action.payload),
			};
		default:
			return state;
	}
};
