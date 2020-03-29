import React, { Component } from 'react';
import Background from './components/Background';
import Message from './components/Message';
import './App.css';
import ItemsList from './components/ItemsList';

export default class App extends Component {

  render() {
    
    return (
      <div className="App">
      <Background />
      <Message />
      <ItemsList />
    </div>
    )
  }
}



