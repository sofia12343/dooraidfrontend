import React, { Component } from 'react';
import {
	BrowserRouter as Router,
	Route,
	Link
} from 'react-router-dom';
//attach router to the react app so users can navigate to different pages

//components
//import the header, footer, homepage, notifications page, bulletin page, pictures page and contact page from componenets> pages 
import Header from './components/headerComponent/header';
import Footer from './components/footerComponent/footer';
import Homepage from './components/pages/homePage';
import Notifications from './components/pages/notifications';
import Bulletin from './components/pages/bulletin';
import Pictures from './components/pages/pictures';
import Contact from './components/pages/contact';

//includes
import './main.css';

//creates router and assigns the path so the app knows where to navigate to (pages in the components)
class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">

      	<Header />

      		<Route exact path='/' component={Homepage} />
      		<Route exact path='/Notifications' component={Notifications} />
			     <Route exact path='/Pictures' component={Pictures} />
      <Route exact path='/Bulletin' component={Bulletin} />
      <Route exact path='/Contact' component={Contact} />

      	<Footer />


      </div>
      </Router>
    );
  }
}

export default App;
