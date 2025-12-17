import React from 'react';
import UserInfo from './Info';

function UserProfile() {
  // User details stored in parent component
  const userName = "Nikita Parjane";
  const userAge = 20;

  return (
    <div className="user-profile">
      <h1>User Profile</h1>
      
      <div className="profile-header">
        <p>Welcome to the user profile page!</p>
      </div>

      {/* Passing props to child component */}
      <UserInfo name={userName} age={userAge} />
    </div>
  );
}

export default UserProfile;