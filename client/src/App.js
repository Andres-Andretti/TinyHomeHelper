import PhotoGalleryDisplay from "./Components/PhotoGalleryDisplay";
import "./Components/CSS/PhotoGallery.css";
import CommunityForum from "./Components/CommunityForum";
import EducateHomepage from "./Components/EducateHomepage";
import "bootswatch/dist/morph/bootstrap.min.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./Components/Home";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import AboutUs from "./Components/AboutUs";
import React from "react";
import TinyHomeChecklist from "./Components/TinyHomeChecklist";
import UploadForm from "./Components/UploadForm";
import UserRegistration from "./Components/UserRegistration";

function App() {
	return (
		<div className='App'>
			<BrowserRouter>
				<Switch>
					<Route exact path='/' component={Home}>
						<Header />
						<Home />
					</Route>
					<Route exact path='/login' component={UserRegistration}>
						<UserRegistration />
					</Route>
					<Route exact path='/registration' component={UserRegistration}>
						<UserRegistration />
					</Route>
					<Route exact path='/about-us' component={AboutUs}>
						<Header />
						<AboutUs />
						<Footer />
					</Route>
					<Route exact path='/TinyHomeChecklist' component={TinyHomeChecklist}>
						<Header />
						<TinyHomeChecklist />
					</Route>
					<Route exact path='/PhotoGallery' component={PhotoGalleryDisplay}>
						<Header />
						<UploadForm />
						<PhotoGalleryDisplay />
					</Route>
					<Route exact path='/communityforum' component={CommunityForum}>
						<Header/>
						<CommunityForum />
						<Footer />
					</Route>
					<Route exact path='/educationalresources'>
						<Header />
						<EducateHomepage />
					</Route>
				</Switch>
			</BrowserRouter>
		</div>
	);
}

export default App;
