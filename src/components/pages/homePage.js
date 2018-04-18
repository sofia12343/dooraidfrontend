import React, { Component } from 'react';

// import './main.css';
//creates homepage
class Homepage extends Component {
  render() {
    return (
<div className ="container-fluid">

<h1>
Home Page 
</h1>

<img src= {require("../../assets/homepage.jpg")} alt="student-image"/>
<br/>
<br/>
<p>
DoorAid is the perfect device if you have a hearing difficulty or impairment. </p>

<p> It is an IoT doorbell that will alert you when someone rings your doorbell and people are going in and out of your home. </p>

<p> To get started with the device place the doorbell outside, open up the front-end website then let the doorbell do the rest. </p>

<p> The Notifications page, will display an alert when someone rings your doorbell and when someone is outside. The Pictures page will display all images of all previous visitors. The Bulletin page enables everyone in the accomodation to leave notes for eachother.</p>

<p> If there is any problem with the device we have a contact page where we can answer all questions via email. </p>


</div>

    );
  }
}

export default Homepage;