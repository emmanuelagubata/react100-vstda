import React, { Component } from 'react';

export default class AddTodo extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleChange = this.handleChange.bind(this);
    this.handleAddTodo = this.handleAddTodo.bind(this);
  }
  handleChange(event) {
    this.props.callbackFromParentChange(event);
  }
  handleAddTodo() {
    const newTodoItem = {
      title: this.props.title,
      priority: this.props.priority,
      isBeingEdited: false,
      complete: false,
    };
    this.props.pushToArray(newTodoItem);
    console.log(newTodoItem);
  }
  render() {
    return (
      <div className='card'>
        <div className='card-header'>Add New Todo</div>
        <div className='card-body'>
          <h6 className='card-title'>I want to..</h6>
          <textarea
            className='create-todo-text'
            onChange={ this.handleChange }
            name='title'
            value={ this.props.title }
          />
          <h6 className='card-title'>How much of a priority is this?</h6>
          <select
            className='create-todo-priority form-control'
            onChange={ this.handleChange }
            name='priority'
          >
            <option selected>Select a Priority</option>
            <option value='3'>3</option>
            <option value='2'>2</option>
            <option value='1'>1</option>
          </select>
        </div>
        <div className='card-footer'>
          <button
            type='button'
            className='btn btn-primary btn-block create-todo'
            onClick={ this.handleAddTodo }
          >
            Add
          </button>
        </div>
      </div>
    );
  }
}

