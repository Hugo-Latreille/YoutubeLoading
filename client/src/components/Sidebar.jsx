import React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import HomeIcon from "@mui/icons-material/Home";
import ExploreIcon from "@mui/icons-material/Explore";
import SubscriptionsIcon from "@mui/icons-material/Subscriptions";
import VideoLibraryIcon from "@mui/icons-material/VideoLibrary";
import "./sidebar.css";
import Skeleton from "./Skeleton";

const Sidebar = ({ isLoading }) => {
	return (
		<div className="sidebar">
			{isLoading ? (
				<Skeleton type="sidebar" />
			) : (
				<div className="sidebarWrapper">
					<div className="sidebarItem">
						<MenuIcon />
					</div>
					<div className="sidebarItem active">
						<HomeIcon />
						<span>Accueil</span>
					</div>
					<div className="sidebarItem">
						<ExploreIcon />
						<span>Explorer</span>
					</div>
					<div className="sidebarItem">
						<SubscriptionsIcon />
						<span>Abonnements</span>
					</div>
					<div className="sidebarItem">
						<VideoLibraryIcon />
						<span>Bibliothèque</span>
					</div>
				</div>
			)}
		</div>
	);
};

export default Sidebar;
