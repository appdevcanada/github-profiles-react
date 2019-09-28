import React from 'react';
import './ProfileCard.css';

function ProfileCard(props) {
  return (
    <div className="profilelist">
      <div className="profile-avatar">
        <img src={props.profile.avatar_url} alt="avatar" />
      </div>
      <div className="card-body">
        <p className="profile-name">
          {props.profile.name}
          <br />
          <span className="profile-login">
            {props.profile.login}
          </span>
        </p>
        <p className="profile-bio">
          {props.profile.bio}
        </p>
      </div>
    </div>
  )
}

export default ProfileCard