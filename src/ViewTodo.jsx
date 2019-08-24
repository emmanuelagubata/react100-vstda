import React, { Component } from 'react';
import Items from './Items';

export default class ViewTodo extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let content;
    if (this.props.toDoList.length === 0) {
      content = (
        <div className='card-body list-group-item-primary'>
          <h5 className='card-title'>Welcome to Very Simple To Do App!</h5>
          <p className='card-text'>
            Get Started Now By Adding A New To Do On The Left
          </p>
        </div>
      );
    } else {
      content = (
        <ul className='list-group'>
          {this.props.toDoList.map(newTodoItem => (
            <Items
              title={ newTodoItem.title }
              priority={ newTodoItem.priority }
              id={ newTodoItem.id }
              key={ newTodoItem.id }
              handleDelete={ this.props.handleDelete }
              handleEditToggle={ this.props.handleEditToggle }
              isBeingEdited={ newTodoItem.isBeingEdited }
              completedTodo={ this.props.completedTodo }
              complete={ newTodoItem.complete }
              handleSave={ this.props.handleSave }
            />
          ))}
        </ul>
      );
    }
    return (
      <div className='col-sm-8'>
        <div className='card'>
          <div className='card-header'>View Todo</div>
          {content}
        </div>
      </div>
    );
  }
}
