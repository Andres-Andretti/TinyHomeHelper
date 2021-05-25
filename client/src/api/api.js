import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:8080" });

//storing the profile in local storage to keep the user logged in
API.interceptors.request.use((req) => {
	if (localStorage.getItem("profile")) {
		req.headers.Authorization = `Bearer ${
			JSON.parse(localStorage.getItem("profile")).token
		}`;
	}

	return req;
});

export const fetchAllPosts = () => API.get("/posts");
export const fetchPost = (id) => API.get(`/posts/${id}`);
export const fetchPosts = (page) => API.get(`/posts?page=${page}`);
export const fetchPostsBySearch = (searchQuery) =>
	API.get(
		`/posts/search?searchQuery=${searchQuery.search || "none"}&tags=${
			searchQuery.tags
		}`
	);
export const createPost = (newPost) => API.post("/posts", newPost);
export const likePost = (id) => API.patch(`/posts/${id}/likePost`);
export const updatePost = (id, updatedPost) =>
	API.patch(`/posts/${id}`, updatedPost);
export const deletePost = (id) => API.delete(`/posts/${id}`);

export const login = (formData) => API.post("/user/login", formData);
export const register = (formData) => API.post("/user/registration", formData);
