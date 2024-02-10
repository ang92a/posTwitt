import React from 'react';

function SenderMes():JSX.Element {
  return (
    <li className="slds-chat-listitem slds-chat-listitem_outbound">
      <div className="slds-chat-message">
        <div className="slds-chat-message__body">
          <div className="slds-chat-message__text slds-chat-message__text_outbound">
            <span>Hi Andy, my name is Amber and I can help you solve your issue.</span>
          </div>
          <div className="slds-chat-message__meta" aria-label="said Amber Cann at 5:23 PM">
            Amber Cann • 5:23 PM
          </div>
        </div>
      </div>
    </li>
  );
}

export default SenderMes;
