import React, { Component } from 'react';

// import './styles/BadgeForm.css';

export default class BadgeForm extends Component {
  handleClick = e => {
    console.log('OnClick');
  };

  handleSubmit = e => {
    e.preventDefault();
    console.log(this.state);
  };

  render() {
    const { onChange, formValues } = this.props;
    const {
      firstName,
      lastName,
      email,
      jobTitle,
      twitterUsername
    } = formValues;

    return (
      <div>
        <h1>New Attendant</h1>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label>First Name</label>
            <input
              onChange={onChange}
              type="text"
              className="form-control"
              name="firstName"
              value={firstName}
            />
          </div>
          <div className="form-group">
            <label>Last Name</label>
            <input
              onChange={onChange}
              type="text"
              className="form-control"
              name="lastName"
              value={lastName}
            />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input
              onChange={onChange}
              type="text"
              className="form-control"
              name="email"
              value={email}
            />
          </div>
          <div className="form-group">
            <label>Job Title</label>
            <input
              onChange={onChange}
              type="text"
              className="form-control"
              name="jobTitle"
              value={jobTitle}
            />
          </div>
          <div className="form-group">
            <label>Twitter</label>
            <input
              onChange={onChange}
              type="text"
              className="form-control"
              name="twitterUsername"
              value={twitterUsername}
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
