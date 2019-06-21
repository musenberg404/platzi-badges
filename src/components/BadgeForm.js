import React, { Component } from 'react';

// import './styles/BadgeForm.css';

export default class BadgeForm extends Component {
  handleChange = e => {
    console.log(e);

    return;
  };

  handleClick = e => {
    console.log('OnClick');
  };

  handleSubmit = e => {
    e.preventDefault();
    console.log('Form was submitted');
  };

  render() {
    return (
      <div>
        <h1>New Attendant</h1>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label>First Name</label>
            <input
              onChange={this.handleChange}
              type="text"
              className="form-control"
              name="firstName"
            />
          </div>

          <button onClick={this.handleClick} className="btn btn-primary">
            Enviar
          </button>
        </form>
      </div>
    );
  }
}
