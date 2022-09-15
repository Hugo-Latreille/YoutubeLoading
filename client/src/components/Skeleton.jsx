import { CircularProgress } from "@mui/material";
import React from "react";
import "./skeleton.css";

const Skeleton = ({ type }) => {
	const counter = 8;

	const FeedSkeleton = () => (
		<div className="postSk">
			<div className="postSkImg"> </div>
			<div className="postSkInfo">
				<div className="postSkAvatar"></div>
				<div className="postSkDetails">
					<div className="postSkText"></div>
					<div className="postSkText sm"></div>
				</div>
			</div>
		</div>
	);

	const TopBarSkeleton = () => (
		<div className="topSk">
			<div className="topSkIcon"></div>
			<div className="topSkIcon"></div>
			<div className="topSkIcon"></div>
			<div className="topSkImg"></div>
		</div>
	);

	const SideBarSkeleton = () => (
		<div className="sidebarSk">
			<div className="sidebarItemSk"></div>
			<div className="sidebarItemSk"></div>
			<div className="sidebarItemSk"></div>
			<div className="sidebarItemSk"></div>
			<div className="sidebarItemSk"></div>
		</div>
	);

	const Circle = () => (
		<div className="circleContainer">
			<CircularProgress />
		</div>
	);

	const CustomLoading = () => (
		<div className="custom">
			<div className="balls">
				<div className="ball ball1"></div>
				<div className="ball ball2"></div>
				<div className="ball ball3"></div>
			</div>
			<span className="customText">Loading...</span>
		</div>
	);

	if (type === "feed") return Array(counter).fill(<FeedSkeleton />);
	if (type === "topbar") return <TopBarSkeleton />;
	if (type === "sidebar") return <SideBarSkeleton />;
	if (type === "circle") return <Circle />;
	if (type === "custom") return <CustomLoading />;
};

export default Skeleton;
