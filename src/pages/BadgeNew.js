import React, { Component } from 'react';

// Custom components
import Navbar from '../components/Navbar';
import Badge from '../components/Badge';
// Styles
import './styles/BadgeNew.css';
// Images
import header from '../images/badge-header.svg';

export default class BadgeNew extends Component {
  render() {
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
                firstName="Mariangélica"
                lastName="Useche"
                jobTitle="Computer Scientist"
                twitterUsername="mustarte"
                avatar="https://es.gravatar.com/userimage/45568449/994578a2ded18412e6d69bfb0362823d?size=200"
                hashConf="platziconf"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
