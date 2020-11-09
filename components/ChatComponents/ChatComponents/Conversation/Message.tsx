import React, { useState, useRef } from "react";
import Moment from "react-moment";
import { useOnClickOutside } from "components/utils/hooks/useClickOutside";
import DropDownMenu from "./DropDownMenu";
import styled from "styled-components";

interface Props {
  user: any;
  chat: any;
  right?: boolean;
  i: number;
  setCurrentMessage: any;
}

const MessagesComponent: React.FC<Props> = ({
  chat,
  user,
  i,
  setCurrentMessage,
}) => {
  const ref = useRef();
  const [Toggle, SetToggle] = useState(false);
  useOnClickOutside(ref, () => SetToggle(false));

  return (
    // @ts-ignore
    <li ref={ref} className={user?.id === chat.SenderId ? "" : "right"}>
      <div className="conversation-list">
        <div className="chat-avatar">
          {chat.SenderId === user.id && <img src={user?.avatar} alt="" />}
          {/* 
                //@ts-ignore */}
          {chat.SenderId !== user.id && (
            // @ts-ignore
            <img src={chat.from?.avatar} alt="" />
          )}
        </div>

        <div className="user-chat-content postilion-relative">
          <div className="ctext-wrap position-relative">
            <div className="ctext-wrap-content">
              {chat.forwarded && <ForwardedStyles>Forwarded</ForwardedStyles>}
              <p className="mb-0">{chat.content}</p>
              <p className="chat-time mb-0">
                <i className="ri-time-line align-middle"></i>
                <span className="align-middle">
                  {" "}
                  <Moment date={chat.createdAt} fromNow /> <br />
                </span>
              </p>
            </div>
            {chat.reactions?.length > 0 &&
              chat.reactions?.map((reaction: any, i: number) => (
                <i
                  key={i}
                  style={{
                    position: "absolute",
                    fontSize: "1.5rem",
                    bottom: "1.2rem",
                    right: "5rem",
                  }}
                >
                  {/* This Will give us only unique values */}
                  {[...new Set(chat.reactions?.map((r: any) => r.content))]}
                  <span className="text-white">
                    {" "}
                    {chat.reactions.length &&
                      chat.reactions.length > 1 &&
                      chat.reactions.length}
                  </span>
                </i>
              ))}
            <DropDownMenu
              setCurrentMessage={setCurrentMessage}
              i={i}
              SetToggle={SetToggle}
              Toggle={Toggle}
              user={user}
              chat={chat}
              copyText={chat.content}
            />
          </div>

          <div className="conversation-name">
            {user?.id === chat.SenderId && chat.from?.username}
          </div>
        </div>
      </div>
    </li>
  );
};

export const ForwardedStyles = styled.span`
  padding: 2px;
  position: absolute;
  font-style: italic;
  background-color: #ffdc00;
  color: #111111;
  top: -2rem;
  right: 0.5rem;
`;

export default MessagesComponent;
