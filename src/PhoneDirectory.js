import React, { Component } from 'react';
import AddSubscriber from './AddSubscriber.js';
import ShowSubscribers from './ShowSubscribers.js';
// import Header from './Header.js';
import './ShowSubscribers.css';
// import './common/common.css';

class PhoneDirectory extends Component {

  constructor(){
    super();
    this.state = {
      subscribersList: [{
        id: 1,
        name:"name1",
        phone:"phone2"
      },
      {
        id: 2,
        name:"name2",
        phone:"phone2"
      }]
    }
  }

  addSubscriberHandler = (newSubscriber) => {
    let subscribersList = this.state.subscribersList;
    if(subscribersList.length > 0) {
      newSubscriber.id = subscribersList[subscribersList.length - 1].id + 1;
    }
    else {
      newSubscriber.id = 1;
    }
    subscribersList.push(newSubscriber);
    this.setState({subscribersList: subscribersList});
    console.log(this.state.subscribersList);
  }

  render() {
    return (
        // <AddSubscriber addSubscriberHandler={this.addSubscriberHandler}/>
        <ShowSubscribers subscribersList={this.state.subscribersList}/>
    )
  }
}
export default PhoneDirectory;