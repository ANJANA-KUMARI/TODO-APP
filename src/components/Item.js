import React, { Component } from 'react';
import '../App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faPen, faSave, faWindowClose  } from '@fortawesome/free-solid-svg-icons';
export default class Item extends Component {

state = {
    isEditBoxShown: false,
    updatedTitle: this.props.todo.title
}

getCheckboxStyle = (todo) => {
    if(todo.completed) {
        return {
            textDecoration: 'line-through'
        }
    } else {
        return {
            textDecoration: 'none'
        }
    }
}

onEditClick = () => {
    this.setState({isEditBoxShown: true});  
}

onSaveClick = (id) => {
    this.props.editItem(id,this.state.updatedTitle);
    this.setState({isEditBoxShown: false});
}

onCancelClick = () => {
    this.setState({isEditBoxShown: false});
}

updateTodo = (e) => this.setState({updatedTitle: e.target.value});

    render() {
        return(
            <div className="item-wrap" key={this.props.todo.id}>
            <div className="todo-text-with-checkbox" style={{display: this.state.isEditBoxShown ? 'none' : 'flex'}} >
                <input className="check-box" type="checkbox" checked={this.props.todo.completed} onChange={() => this.props.isChecked(this.props.todo.id)}></input>
                <div className="todo">
                        <label style={this.getCheckboxStyle(this.props.todo)}>{this.props.todo.title}</label>
                </div>
                <div className="edit-delete-icons">
                    <button className="edit-btn" onClick={this.onEditClick}><FontAwesomeIcon icon={faPen} size="lg" /></button>
                    <button className="delete-btn" onClick={() => this.props.deleteItem(this.props.todo.id)}><FontAwesomeIcon icon={faTrash} size="lg" /></button>
                </div>


            </div>
                <div className="edit-wrap" style={{display: this.state.isEditBoxShown ? 'flex' : 'none'}}> 
                    <div className="edit-field">
                        <input className="edit-todo" onChange={this.updateTodo} value={this.state.updatedTitle}></input>
                    </div>

                    <div className="save-cancel-btns">
                        <button className="save-btn" onClick={() => this.onSaveClick(this.props.todo.id)}><FontAwesomeIcon icon={faSave} size='lg'/></button>
                        <button className="cancel-btn" onClick={this.onCancelClick}><FontAwesomeIcon icon={faWindowClose} size='lg'/></button>
                    </div>
                </div> 
        </div>
        )
    }
}





