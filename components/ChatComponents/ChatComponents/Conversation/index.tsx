import React from "react";
import { useConversationStore } from "components/ChatComponents/ChatState";
import styled from "styled-components";
import Moment from "react-moment";
import { SRLWrapper } from "simple-react-lightbox";
import { Messages, User } from "generated/graphql";
import ReactButton from "./Reactions";

const ConversationStyles = styled.div`
  height: 600px;
  overflow: auto;

  /* Scroll bar */
  ::-webkit-scrollbar {
    width: 0.4em;
  }

  ::-webkit-scrollbar-track {
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  }

  ::-webkit-scrollbar-thumb {
    background-color: darkgrey;
    outline: 1px solid slategrey;
  }
`;

const Conversation = () => {
  // const [Messages, setMessages] = useState(null);

  const user: User | any = useConversationStore((state) => state.user);
  const Messages: Messages | any = useConversationStore(
    (state) => state.messages
  );
  if (!Messages || !Messages.length || !user)
    return <h1>Please Select a contact To start Chating</h1>;

  return (
    <ConversationStyles
      className="chat-conversation p-3 p-lg-4"
      data-simplebar="init"
    >
      <ul className="list-unstyled mb-0">
        <li>
          <div className="chat-day-title"></div>
        </li>
        {Messages?.map((chat: any, i: number) => (
          <div key={i}>
            <li className={user?.id === chat.SenderId ? "" : "right"}>
              <div className="conversation-list">
                <div className="chat-avatar">
                  {chat.SenderId === user.id && (
                    <img src={user?.avatar} alt="" />
                  )}
                  {/* 
                          //@ts-ignore */}
                  {chat.SenderId !== user.id && (
                    // @ts-ignore
                    <img src={chat.from?.avatar} alt="" />
                  )}
                </div>

                <div className="user-chat-content postilion-relative">
                  <div className="ctext-wrap">
                    <div className="ctext-wrap-content">
                      <p className="mb-0">{chat.content}</p>
                      <p className="chat-time mb-0">
                        <i className="ri-time-line align-middle"></i>
                        <span className="align-middle">
                          {" "}
                          <Moment date={chat.createdAt} fromNow />{" "}
                        </span>
                      </p>
                    </div>
                    {chat.reactions?.length &&
                      chat.reactions?.map((reaction: any, i: number) => (
                        <i
                          key={i}
                          style={{
                            position: "absolute",
                            fontSize: "1.5rem",
                            top: "6.2rem",
                            left: "12.8rem",
                          }}
                        >
                          {[
                            ...new Set(
                              chat.reactions?.map((r: any) => r.content)
                            ),
                          ]}
                          <span className="text-white">
                            {" "}
                            {chat.reactions.length > 0 && chat.reactions.length}
                          </span>
                        </i>
                      ))}
                    <div className="dropdown align-self-start">
                      <div className="d-flex flex-column justify-content-between align-items-center">
                        <a>
                          <i className="ri-more-2-fill"></i>
                        </a>
                        <ReactButton MessageId={chat.id} />
                      </div>

                      <div className="dropdown-menu">
                        <a className="dropdown-item" href="#">
                          Copy
                          <i className="ri-file-copy-line float-right text-muted"></i>
                        </a>
                        <a className="dropdown-item" href="#">
                          Save
                          <i className="ri-save-line float-right text-muted"></i>
                        </a>
                        <a className="dropdown-item" href="#">
                          Forward
                          <i className="ri-chat-forward-line float-right text-muted"></i>
                        </a>
                        <a className="dropdown-item" href="#">
                          Delete
                          <i className="ri-delete-bin-line float-right text-muted"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="conversation-name">
                    {user?.id === chat.SenderId && chat.from?.username}
                  </div>
                </div>
              </div>
            </li>
            {/* image */}
            {chat.image && (
              <li className={user?.id === chat.SenderId ? "" : "right"}>
                <div className="conversation-list">
                  <div className="chat-avatar">
                    {chat.SenderId === user.id && (
                      <img src={user?.avatar} alt="" />
                    )}
                    {/* 
                          //@ts-ignore */}
                    {chat.SenderId !== user.id && (
                      // @ts-ignore
                      <img src={chat.from?.avatar} alt="" />
                    )}
                  </div>
                  <div className="user-chat-content">
                    <div className="ctext-wrap">
                      <div className="ctext-wrap-content">
                        <ul className="list-inline message-img mb-0">
                          <li className="list-inline-item message-img-list">
                            <div>
                              <SRLWrapper>
                                <img
                                  src={chat.image}
                                  alt={chat.from.username}
                                  className="rounded border"
                                />
                              </SRLWrapper>
                            </div>
                          </li>
                        </ul>
                        <p className="chat-time mb-0">
                          <i className="ri-time-line align-middle"></i>
                          <span className="align-middle">
                            {" "}
                            <Moment date={chat.createdAt} fromNow />{" "}
                          </span>
                        </p>
                      </div>

                      <div className="dropdown align-self-start">
                        <a
                          className="dropdown-toggle"
                          href="#"
                          role="button"
                          data-toggle="dropdown"
                          aria-haspopup="true"
                          aria-expanded="false"
                        >
                          <i className="ri-more-2-fill"></i>
                        </a>
                        <div className="dropdown-menu">
                          <a className="dropdown-item" href="#">
                            Copy
                            <i className="ri-file-copy-line float-right text-muted"></i>
                          </a>
                          <a className="dropdown-item" href="#">
                            Save
                            <i className="ri-save-line float-right text-muted"></i>
                          </a>
                          <a className="dropdown-item" href="#">
                            Forward
                            <i className="ri-chat-forward-line float-right text-muted"></i>
                          </a>
                          <a className="dropdown-item" href="#">
                            Delete
                            <i className="ri-delete-bin-line float-right text-muted"></i>
                          </a>
                        </div>
                      </div>
                    </div>

                    <div className="conversation-name">
                      {user?.id === chat.SenderId && chat.from?.username}
                    </div>
                  </div>
                </div>
              </li>
            )}
          </div>
        ))}
      </ul>
    </ConversationStyles>
  );
};

export default Conversation;
