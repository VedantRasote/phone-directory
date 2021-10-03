import React, { Component } from "react";
import Header from './Header.js';
import './AddSubscriber.css';
import { Link } from 'react-router-dom';
class AddSubscriber extends Component {

    constructor() {
        super();
        this.state = {
            id: 0,
            name: '',
            phone: ''
        }
    }

    inputChangedHandler = (e) => {
        const state = this.state;
        state[e.target.name] = e.target.value;
        this.setState(state);
    }

    onFormSubmitted = (e) => {
        e.preventDefault();
        this.props.addSubscriberHandler(this.state);
        this.setState({ id: 0, name: '', phone: '' });
        this.props.history.push("/");
    }

    render() {
        const { name, phone } = this.state;
        return (
            <div>
                <Header heading="Add Subscriber" />
                <div className="component-body-container">
                    <Link to="/"><button className="custom-btn">Back</button></Link>
                    <form className="subscriber-form" onSubmit={this.onFormSubmitted.bind(this)}>
                        <label className="label-control" htmlFor="name">Name: </label><br />
                        <input className="input-control" id="name" name="name" type="text" onChange={this.inputChangedHandler} /><br /><br />
                        <label className="label-control" htmlFor="phone">Phone: </label><br />
                        <input className="input-control" id="phone" name="phone" type="text" onChange={this.inputChangedHandler} /><br /><br />
                        <div className="subscriber-info-container">
                            <span className="subscriber-to-add-heading">Subscriber to be added</span><br />
                            <span className="subscriber-info">Name: {name} </span><br />
                            <span className="subscriber-info">Phone: {phone} </span>
                        </div>
                        <button className="custom-btn add-btn" type="submit">Add</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default AddSubscriber;