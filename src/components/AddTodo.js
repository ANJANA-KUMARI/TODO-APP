import React, { Component } from 'react';
import '../App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronCircleUp } from '@fortawesome/free-solid-svg-icons';

export default class AddTodo extends Component {

    state = {
        title: ''
    }

    addTodo = (e) => {
        e.preventDefault();
        this.props.addItem(this.state.title);
        this.setState({ title: ''});
    }


    titleChange = (e) => this.setState({title: e.target.value});

    render() {
        return (
            <div className="add-todos-wrap">
            <input className="text-field" placeholder="Type a todo..." type="text" value={this.state.title} onChange={this.titleChange}></input>

            <div className="up-arrow">
                <button className="add-btn" onClick={this.addTodo}><FontAwesomeIcon icon={faChevronCircleUp} size="lg" color="white"/></button>
            </div>
        </div>
        )
    }
}
