import React, { Component } from 'react';

export default class Edit extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='card'>
        <div className='card-body'>
          <h6 className='card-title'>Description</h6>
          <textarea
            className='update-todo-text'
            onChange={ this.props.handleChange }
            name='newTitle'
            value={ this.props.title }
          />
          <h6 className='card-title'>Priority</h6>
          <select
            className='update-todo-priority form-control'
            onChange={ this.props.handleChange }
            name='newPriority'
            value={ this.props.priority }
          >
            <option selected>Select a Priority</option>
            <option value='3'>High Priority</option>
            <option value='2'>Medium Priority</option>
            <option value='1'>Low Priority</option>
          </select>
        </div>
        <div className='footer'>
          <div className='text-right'>
            <button
              type='button'
              className='update-todo btn btn-success'
               onClick={() =>
              this.props.handleSave(
                this.props.title,
                this.props.priority,
                this.props.id

              )
              }
            >
              Save
            </button>
          </div>
        </div>
      </div>
    );
  }
}
