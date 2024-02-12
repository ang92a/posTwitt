import React from 'react';

function SenderMes({message, user}):JSX.Element {
  return (
    <li className="slds-chat-listitem slds-chat-listitem_outbound">
      <div className="slds-chat-message">
        <div className="slds-chat-message__body">
          <div className="slds-chat-message__text slds-chat-message__text_outbound">
            <span>{message}</span>
          </div>
          <div className="slds-chat-message__meta" aria-label="said Amber Cann at 5:23 PM">
            {user?.name} • 5:23 PM
          </div>
        </div>
      </div>
    </li>
  );
}

export default SenderMes;
