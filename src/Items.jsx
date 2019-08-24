import React, { Component } from 'react';
import Edit from './Edit';

export default class Items extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newTitle: this.props.title,
      newPriority: this.props.priority
    };
    this.alertColor = this.alertColor.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
    // this handles the change between your initial and altered values.
  }

  alertColor(priority) {
    if (priority === '3') {
      return 'list-group-item list-group-item-danger';
    } else if (priority === '2') {
      return 'list-group-item list-group-item-warning';
    } else if (priority === '1') {
      return 'list-group-item list-group-item-success';
    }
  }

  strikethrough(complete) {
    if (complete === true) {
      return 'line-through';
    } else {
      return none ;
    }
  }
  render() {
    const isBeingEdited = this.props.isBeingEdited;
    return (
      <div>
        {!isBeingEdited ? (
          <li className={this.alertColor(this.props.priority)}>
            <input
              type='checkbox'
              checked={this.props.complete}
              onClick={() => this.props.completedTodo(this.props.id)}
              />
              {!this.props.complete ? (
                <span>
                  {this.props.title}
                </span>
              ) : (
                <s>{ this.props.title }</s>  
              )
            }
            <button
              type='button'
              className='btn btn-danger btn-sm pull-right delete-todo'
              onClick={() => this.props.handleDelete(this.props.id)}
            >
              <i className='fa fa-trash' />
            </button>
            <button
              type='button'
              className='btn btn-primary btn-sm pull-right edit-todo'
              onClick={() => this.props.handleEditToggle(this.props.id)}
            >
              <i className='fa fa-edit' />
            </button>
          </li>
        ) : (
          <Edit title={ this.state.newTitle } priority={ this.state.newPriority } id={ this.props.id } handleSave={ this.props.handleSave }
            handleChange={ this.handleChange } />
          
        )}
      </div>
    );
  }
}
