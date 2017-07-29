import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import AddTask from './components/add-task/AddTask'
import TaskItem from './components/task-item/TaskItem'

class App extends Component {

  state = {
    tasks: [
      {id:'1', title:'item1', isAble:true},
      {id:'2', title:'item2', isAble:true},
      {id:'3', title:'item3', isAble:false},
      {id:'4', title:'item4', isAble:false}

    ],
  }

  createItem = (id, title, isAble) => {
    var item = new Object(); 
    item.id = id; 
    item.title =title; 
    item.isAble = isAble; 
    return item;
  }

  onAddTask = (val) => {   
    this.state.tasks.push(this.createItem(new Date(),val,true));
    this.setState(this.state)
  }

  onToggleTask = (id) => {
    this.setState({
      tasks: this.state.tasks.map((t) => {
        if (t.id === id) {
          t.isAble = !t.isAble
        }
        return t
      })
    })
  }

  render() {
    return (
      <div className="App">
        <p className="App-intro">
          <h1>ADD Task</h1>
          <AddTask onAddTask1={this.onAddTask}/>
          <h3>TODO Tasks</h3>
          {this.state.tasks.filter((t) => {
            return t.isAble;
          }).map((t) => {
          return <TaskItem task = {t} onToggleTask={this.onToggleTask}/>          
          })}
          <h3>Completed Tasks</h3>
          {this.state.tasks.filter((t) => {
            return !t.isAble;
          }).map((t) => {
          return <TaskItem task = {t}/>          
          })}
        </p>
      </div>
    );
  }
}

export default App;
