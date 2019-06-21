import React, { Component } from 'react';
import logo from '../images/logo.svg';
import './styles/Navbar.css';

export default class Navbar extends Component {
  render() {
    return (
      <div className="Navbar">
        <div className="container-fluid">
          <a className="Navbar__brand" href="/">
            <img src={logo} alt="brand logo" />
            <span className="font-weight-light"> Platzi</span>
            <span className="font-weight-bold">Conf</span>
          </a>
        </div>
      </div>
    );
  }
}
