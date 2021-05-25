import React, { useEffect } from "react";
import "./CSS/Feed.css";
import CreatePost from "./CreatePost";
import Post from "./Post";
import { useDispatch, useSelector } from "react-redux";
import { getPosts } from "../actions/postActions";

function Feed() {

	const dispatch = useDispatch();

	const allPosts = useSelector((state) => state.postsReducer.posts);
	console.log(allPosts);

	useEffect(() => {
		dispatch(getPosts());
	}, []);

	return (
		<div className='feed'>
			<CreatePost />
			{allPosts.map((post) => (
				<Post key={post?._id} post={post} />
			))}
		</div>
	);
}

export default Feed;
