import React, { Component } from 'react';

import './styles/Badges.css';

class BadgesListItem extends Component {
  render() {
    const { badge } = this.props;
    return (
      <div className="BadgesListItem">
        <div className="row">
          <div className="col-2">
            <img
              className="BadgesListItem__avatar"
              src={badge.avatarUrl}
              alt={`${badge.firstName} ${badge.lastName}`}
            />
          </div>
          <div className="col-9 BadgeListItem__info-container">
            <strong>
              {badge.firstName} {badge.lastName}
            </strong>

            <br />
            <span class="BadgeListItem__twitter">@{badge.twitter}</span>
            <br />
            <span className="BadgeListItem__jonTitle">{badge.jobTitle}</span>
          </div>
        </div>
      </div>
    );
  }
}

class BadgesList extends React.Component {
  render() {
    const { badges } = this.props;
    return (
      <div className="BadgesList">
        <ul className="list-unstyled">
          {badges.map(badge => {
            return (
              <li key={badge.id}>
                <BadgesListItem badge={badge} />
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default BadgesList;
