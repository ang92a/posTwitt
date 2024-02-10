import React from 'react';
import './style/chat.css';
import UsersPanel from './UsersPanel';
import send from './assets/send-svgrepo-com.svg';
import SenderMes from './SenderMes';
import ReceiverMes from './ReceiverMes';

function ChatTest(): JSX.Element {
  return (
    <>
      <UsersPanel />
      <section role="log" className="slds-chat">
        <ul className="slds-chat-list">
          <SenderMes />
          <ReceiverMes />
          <li className="slds-chat-listitem slds-chat-listitem_bookend">
            <div className="slds-chat-bookend slds-chat-bookend_stop">
              <span className="slds-icon_container slds-icon-utility-end_chat slds-chat-icon">
                <svg
                  className="slds-icon slds-icon_x-small slds-icon-text-default"
                  aria-hidden="true"
                >
                  <use xlinkHref="/assets/icons/utility-sprite/svg/symbols.svg#end_chat" />
                </svg>
              </span>
            </div>
          </li>
        </ul>
      </section>
      <div className="input-container">
        <input type="text" placeholder="Type a message..." />
        <button type="submit">
          <img src={send} alt="send" />
        </button>
      </div>
    </>
  );
}

export default ChatTest;
