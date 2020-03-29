import React, { Component } from 'react';
import '../App.css';
import ItemsListHeader from './ItemsListHeader';
import Item from './Item';
import AddTodo from './AddTodo';

export default class ItemsList extends Component {
    state = {
        todos: []
    }

isChecked = (id) => {
    const checkedTodo = this.state.todos.find(todo => {
        if(todo.id === id){
            return true;
        }else{
            return false;
        }
    });

    checkedTodo.completed = !checkedTodo.completed;
    this.setState({todos: [...this.state.todos.filter(todo => {
        if(todo.id === id) {
            return false;
        }
        return true;
    }), checkedTodo]}); 
}

deleteItem = (id) => {
    this.setState({todos: [...this.state.todos.filter(todo => {
        if(todo.id === id) {
           return false;
        } else {
            return true;
        }
    })]})   
}

addItem = (title) => {
    let len = this.state.todos.length;
    const newItem = {
        id: ++len,
        title,
        completed: false
    }
    this.setState({todos: [newItem, ...this.state.todos]});
   
}

editItem = (id, updatedTitle) => {
    this.setState({todos: [...this.state.todos.map(todo => {
        if(todo.id === id) {
            todo.title = updatedTitle
        }
        return todo;
    })]});
}

    render() {

        return (
            <div className="items-list-wrap ">
                <ItemsListHeader />

                <div className="item-list-wrap scroll-bar">
                    {this.state.todos.map( (todo) => (
                        <Item todo={todo} isChecked={this.isChecked} deleteItem={this.deleteItem} editItem={this.editItem} />))
                    }
                </div>
                <AddTodo addItem={this.addItem} />
            </div>
        )
    }
}

