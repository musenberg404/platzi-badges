import React, { Component } from 'react';
import Navbar from '../components/Navbar';
import Badge from '../components/Badge';

export default class BadgeNew extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Badge
          firstName="Mariangélica"
          lastName="Useche"
          jobTitle="Computer Scientist"
          twitterUsername="mustarte"
          avatar="https://es.gravatar.com/userimage/45568449/994578a2ded18412e6d69bfb0362823d?size=200"
          hashConf="platziconf"
        />
      </div>
    );
  }
}
