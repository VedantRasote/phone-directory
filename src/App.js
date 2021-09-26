import React, { Component } from 'react';
import Header from './Header.js';
import './App.css';

class App extends Component {

  constructor(){
    super();
    this.state = {
      subscribersListToShow: []
    }
  }

  render() {
    // let subscribers = [
    //   {id: 1,name:"Vedant",phone:"9999988888"},
    //   {id: 2,name:"Piyush",phone:"8888899999"}
    // ];
    return (
      <div>
        <Header heading="Phone Directory" />
        <div className="component-body-container">
          <button className="custom-btn add-btn">Add</button>
          <div className="grid-container heading-container">
            <span className="grid-item name-heading">Name</span>
            <span className="grid-item phone-heading">Phone</span>
          </div>

          { this.state.subscribersListToShow.map(sub=>{
            return <div className="grid-container" key={sub.id} >
              <span className="grid-item">{sub.name}</span>
              <span className="grid-item">{sub.phone}</span>
              <button className="custom-btn delete-btn">Delete</button>
            </div>
          })}       

        </div>
      </div>
    );
  }
}
export default App;