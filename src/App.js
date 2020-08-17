import React, { Component } from 'react';
import Consents from './components/Consents'
import AddConsent from './components/AddConsent'
import {v4 as uuid} from 'uuid';


class App extends Component {
  state = {
    consents:[
      {
        id: uuid(),
        title: 'Grocery Shopping',
        checked: false
      },
      {
        id: uuid(),
        title: 'Dinner at 6pm',
        checked: false
      },
      {
        id: uuid(),
        title: 'Soccer practice',
        checked: false
      },
      {
        id: uuid(),
        title: 'Hang up pictures',
        checked: false
      },
      {
        id: uuid(),
        title: 'Clean the kitchen',
        checked: false

      }
    ]
  }

  //Toggle items
  markConsenting = (id) => {
    this.setState({ consents: this.state.consents.map(consent => {
      if(consent.id === id){
        consent.checked = !consent.checked
      }
      return consent;
    })})
  }

  //Delete consent item
  delete = (id) => {
    this.setState({ consents: [...this.state.consents.filter(consent => consent.id !== id)] });
  }

  //Add custom consent item
  addConsent = (title) =>{
    const newConsent = {
      id: uuid(),
      title: title,
      checked: false
    }
    this.setState({ consents: [...this.state.consents, newConsent] })
  }


  render(){
    return (
      <div className="App">
        <div className="container">
          <header><h1>Todo List</h1></header>
          <AddConsent addConsent={this.addConsent}/>
          <Consents consents = {this.state.consents} markConsenting={this.markConsenting} delete={this.delete}/>
        </div>
      </div>
    );
  }
}

export default App;
