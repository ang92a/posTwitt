import React from 'react';

function Message({ user, message }): JSX.Element {
  return (
    <div className="messages-container">
      <div className="messages">
        <h4> {user.name}</h4>
        <h5> {message}</h5>
      </div>
    </div>
  );
}

export default Message;
