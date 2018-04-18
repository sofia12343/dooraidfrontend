import React, { Component } from 'react';
import {
	Link
} from 'react-router-dom';

// import './main.css';
//creates header on all pages
//the logo will appear in header bar with DoorAid
//creates navigation links on the header


class Header extends Component {
  render() {
    return (
<header>
<div className="logo">
<img src= {require("../../assets/logo1.jpg")} alt="student-image" width="52" height="52"/>
DoorAid
</div>
<nav>
	<ul>
		<li className = "first">
			<Link to="/">Home</Link>
		</li>
		<li>
			<Link to="/Notifications">Notifications</Link>
		</li>
		<li>
			<Link to="/Bulletin">Bulletin</Link>
		</li>
		<li>
			<Link to="/Pictures">Pictures</Link>
		</li>
		<li className = "last">
			<Link to="/Contact">Contact</Link>
		</li>

	</ul>

</nav>

</header>

    );
  }
}

export default Header;
