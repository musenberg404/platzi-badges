import React, { Component } from 'react';

// Custom components
import Navbar from '../components/Navbar';
import Badge from '../components/Badge';
import BadgeForm from '../components/BadgeForm';
// Styles
import './styles/BadgeNew.css';
// Images
import header from '../images/badge-header.svg';

export default class BadgeNew extends Component {
  state = {
    form: {
      firstName: '',
      lastName: '',
      email: '',
      jobTitle: '',
      twitterUsername: ''
    }
  };

  handleChange = e => {
    this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value
      }
    });
  };

  render() {
    const { form } = this.state;
    return (
      <div>
        <Navbar />
        <div className="BadgeNew__hero">
          <img className="img-fluid" src={header} alt="Logo" />
        </div>
        <div className="container">
          <div className="row">
            <div className="col">
              <Badge
                firstName={form.firstName}
                lastName={form.lastName}
                jobTitle={form.jobTitle}
                twitterUsername={form.twitterUsername}
                avatar="https://es.gravatar.com/userimage/45568449/994578a2ded18412e6d69bfb0362823d?size=200"
                email={form.email}
                hashConf="platziconf"
              />
            </div>
            <div className="col">
              <BadgeForm
                onChange={this.handleChange}
                formValues={this.state.form}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
