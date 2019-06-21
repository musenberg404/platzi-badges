import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';

import './global.css';
import Badge from './components/Badge';

const container = document.getElementById('app');

ReactDOM.render(
  <Badge
    firstName="Mariangélica"
    lastName="Useche"
    jobTitle="Computer Scientist"
    twitterUsername="mustarte"
    avatar="https://es.gravatar.com/userimage/45568449/994578a2ded18412e6d69bfb0362823d?size=200"
    hashConf="platziconf"
  />,
  container
);
