import React, { Component } from 'react';
import PubNubReact from 'pubnub-react';
//imported pubnub-react to allow message from arduino the send to frontend

// import './main.css';
//creates notification from the messages sent to pubnub from the arudino
class Notifications extends Component {
//set up pubnub with my publish key and subscribe key
constructor(props) {
        super(props);
        this.pubnub = new PubNubReact({
            publishKey: 'pub-c-9f65251b-0280-4504-8bc4-ccf128ca47ca',
            subscribeKey: 'sub-c-231999f6-40f4-11e8-8ce7-1294c71dad07'
        });
        this.pubnub.init(this);
    }
//assigned my channel i created in my code 'pir' to allow the messages to be set to front end
componentWillMount() {
        this.pubnub.subscribe({
            channels: ['pir'],
            withPresence: true
        });
 
        this.pubnub.getMessage('pir', (msg) => {
            console.log(msg);
        });
 
        this.pubnub.getStatus((st) => {
            this.pubnub.publish({
                message: 'Be notified when someones at your door:',
                channel: 'pir'
            });
        });
    }

   componentWillUnmount() {
        this.pubnub.unsubscribe({
            channels: ['pir']
        });
    }
//creates the messages set in the code and puts onto front end
  render() {
        const messages = this.pubnub.getMessage('pir');
        return (
            <div>
                <ul>
                    {messages.map((m, index) => <li key={'message' + index}>{m.message}</li>)}
                </ul>
            </div>
  	
//     return (
// <div className ="container-fluid">

// <h1>
// Notifications
// </h1>
// <br/>
// <p>
// The Notifcations page alerts you when someone rings your doorbell and when someone is out side your house. 
// </p>
// <p> We know hearing certain noises, such as a doorbell ring, is difficult to hear. This means you can be unaware of someone ringing your front door, or even whose coming in and out of your accomdation. </p>
// <p> DoorAid will allow you to monitor whose at your door and whose inside your home. </p>

// </div>

    );
  }
}

export default Notifications;