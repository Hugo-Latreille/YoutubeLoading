import React, { useEffect, useState } from "react";
import Post from "./Post";
import "./feed.css";
import axios from "axios";
import Skeleton from "./Skeleton";

const Feed = () => {
	const [isLoading, setIsLoading] = useState(true);
	const [videos, setVideos] = useState([]);

	useEffect(() => {
		const getVideos = async () => {
			setIsLoading(true);
			try {
				const res = await axios.get("http://localhost:8800/api/videos/1");
				setVideos(res.data);
				setIsLoading(false);
			} catch (err) {
				setIsLoading(false);
			}
		};
		getVideos();
	}, []);

	return (
		<div className="feed">
			{isLoading ? (
				<Skeleton type="feed" />
			) : (
				videos.map((video) => <Post key={video.id} video={video} />)
			)}
		</div>
	);
};

export default Feed;
