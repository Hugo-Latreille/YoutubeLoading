import React from "react";
import MicIcon from "@mui/icons-material/Mic";
import SearchIcon from "@mui/icons-material/Search";
import VideoCallIcon from "@mui/icons-material/VideoCall";
import AppsIcon from "@mui/icons-material/Apps";
import NotificationsIcon from "@mui/icons-material/Notifications";
import "./topbar.css";
import Skeleton from "./Skeleton";

const Topbar = ({ isLoading, user }) => {
	return (
		<div className="topbar">
			<div className="topLeft">
				<img src="https://i.ibb.co/KDtnJVY/logo.png" alt="" className="logo" />
				<span className="logoText">YouTube</span>
			</div>
			<div className="topCenter">
				<div className="topSearch">
					<input type="text" placeholder="Search" />
					<div className="topSearchIconContainer">
						<SearchIcon className="topSearchIcon" />
					</div>
					<MicIcon />
				</div>
			</div>
			{isLoading ? (
				<Skeleton type="topbar" />
			) : (
				<div className="topRight">
					<VideoCallIcon className="topIcon" />
					<AppsIcon className="topIcon" />
					<NotificationsIcon className="topIcon" />
					<img src={user.avatar} className="topImg" alt="" />
				</div>
			)}
		</div>
	);
};

export default Topbar;
