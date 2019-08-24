import React, { Component } from 'react';
import AddTodo from './AddTodo';
import ViewTodo from './ViewTodo';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toDoList: [],
      title: '',
      priority: '',
      id: 0,
      complete: false
    };
    this.handleChange = this.handleChange.bind(this);
    this.pushToArray = this.pushToArray.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleEditToggle = this.handleEditToggle.bind(this);
    this.completedTodo = this.completedTodo.bind(this);
    this.handleSave = this.handleSave.bind(this);
  }
  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
    // this handles the change between your initial and altered values.
  }
  pushToArray(newTodoItem) {
    newTodoItem.id = this.state.id;
    const updateList = this.state.toDoList;
    updateList.push(newTodoItem);
    this.setState({
      toDoList: updateList,
      title: '',
      priority: 'Select a priority',
      id: this.state.id + 1
    });
  }

  handleDelete(id) {
    this.setState(prevState => ({
      toDoList: prevState.toDoList.filter(toDoItem => toDoItem.id !== id)
    }));
  }

  handleEditToggle(id) {
    this.setState(prevState => {
      prevState.toDoList.map(toDoItem => {
        if (toDoItem.id == id) {
          toDoItem.isBeingEdited = !toDoItem.isBeingEdited;
        }
      });
    });
  }
  completedTodo(id) {
    console.log(id);
    this.setState(prevState => ({
      toDoList: prevState.toDoList.map(toDoItem => {
        if (toDoItem.id == id) {
          toDoItem.complete = !toDoItem.complete;
        }
        console.log(toDoItem);
        return toDoItem;
      })
    }));
  }
  handleSave(newTitle, newPriority, id) {
    console.log(newTitle);
    console.log(newPriority);
    this.setState(prevState => ({
      toDoList: prevState.toDoList.map(toDoItem => {
        if (toDoItem.id == id) {
          toDoItem.title = newTitle;
          toDoItem.priority = newPriority;
          toDoItem.isBeingEdited = false;
        }
        console.log(toDoItem);
        return toDoItem;
      })
    }));
  }

  render() {
    return (
      <div className='container'>
        <h1 className='text-white'>Very Simple Todo App</h1>
        <h5 className='text-white'>Track all of the things</h5>
        <p className='border-bottom' />
        <div className='row'>
          <div className='col-sm-4'>
            <AddTodo
              callbackFromParentChange={this.handleChange}
              title={this.state.title}
              priority={this.state.priority}
              id={this.state.id}
              pushToArray={this.pushToArray}
            />
          </div>
          <ViewTodo
            toDoList={this.state.toDoList}
            handleDelete={this.handleDelete}
            handleEditToggle={this.handleEditToggle}
            completedTodo={this.completedTodo}
            handleSave={this.handleSave}
          />
        </div>
      </div>
    );
  }
}

export default App;
