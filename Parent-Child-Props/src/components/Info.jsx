import React from 'react';

function UserInfo({ name, age }) {
  return (
    <div className="user-info">
      <h2>User Information</h2>
      <div className="info-item">
        <strong>Name:</strong> {name}
      </div>
      <div className="info-item">
        <strong>Age:</strong> {age} years old
      </div>
    </div>
  );
}

export default UserInfo;