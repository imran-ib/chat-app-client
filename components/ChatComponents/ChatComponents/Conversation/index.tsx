import React from "react";
import { useConversationStore } from "components/ChatComponents/ChatState";
import styled from "styled-components";
import { useGetMessagesQuery } from "generated/graphql";
import { ChatSpinner } from "components/utils/Spinners/ChatSidebarSpinners";
import Moment from "react-moment";
import { SRLWrapper } from "simple-react-lightbox";

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
  const user = useConversationStore((state) => state.user);

  const { data, loading, error } = useGetMessagesQuery({
    variables: {
      from: user?.username,
    },
  });

  if (loading) return <ChatSpinner />;

  console.log("Conversation -> data", data);
  return (
    <ConversationStyles
      className="chat-conversation p-3 p-lg-4"
      data-simplebar="init"
    >
      <ul className="list-unstyled mb-0">
        <li>
          <div className="chat-day-title"></div>
        </li>

        {data?.GetMessages.map((chat) => (
          <div key={chat.id}>
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
                    <img src={chat.from.avatar} alt="" />
                  )}
                </div>

                <div className="user-chat-content">
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
                    {user?.id === chat.SenderId && chat.from.username}
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
                      <img src={chat.from.avatar} alt="" />
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
                                  alt="chat.from.username"
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
                      {user?.id === chat.SenderId && chat.from.username}
                    </div>
                  </div>
                </div>
              </li>
            )}
          </div>
        ))}
        {/* <li className="right">
          <div className="conversation-list">
            <div className="chat-avatar">
              <img src="/images/users/avatar-1.jpg" alt="" />
            </div>

            <div className="user-chat-content">
              <div className="ctext-wrap">
                <div className="ctext-wrap-content">
                  <p className="mb-0">
                    Good morning, How are you? What about our next meeting?
                  </p>
                  <p className="chat-time mb-0">
                    <i className="ri-time-line align-middle"></i>
                    <span className="align-middle">10:02</span>
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
              <div className="conversation-name">Patricia Smith</div>
            </div>
          </div>
        </li>


        <li>
          <div className="conversation-list">
            <div className="chat-avatar">
              <img src="/images/users/avatar-4.jpg" alt="" />
            </div>

            <div className="user-chat-content">
              <div className="ctext-wrap">
                <div className="ctext-wrap-content">
                  <p className="mb-0">Yeah everything is fine</p>
                  <p className="chat-time mb-0">
                    <i className="ri-time-line align-middle"></i>
                    <span className="align-middle">10:05</span>
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

              <div className="ctext-wrap">
                <div className="ctext-wrap-content">
                  <p className="mb-0">& Next meeting tomorrow 10.00AM</p>
                  <p className="chat-time mb-0">
                    <i className="ri-time-line align-middle"></i>
                    <span className="align-middle">10:05</span>
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

              <div className="conversation-name">Doris Brown</div>
            </div>
          </div>
        </li>

        <li className="right">
          <div className="conversation-list">
            <div className="chat-avatar">
              <img src="/images/users/avatar-1.jpg" alt="" />
            </div>

            <div className="user-chat-content">
              <div className="ctext-wrap">
                <div className="ctext-wrap-content">
                  <p className="mb-0">Wow that's great</p>
                  <p className="chat-time mb-0">
                    <i className="ri-time-line align-middle"></i>
                    <span className="align-middle">10:06</span>
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

              <div className="conversation-name">Patricia Smith</div>
            </div>
          </div>
        </li>

        <li>
        // TODO
          <div className="conversation-list">
            <div className="chat-avatar">
              <img src="/images/users/avatar-4.jpg" alt="" />
            </div>

            <div className="user-chat-content">
              <div className="ctext-wrap">
                <div className="ctext-wrap-content">

                  <ul className="list-inline message-img mb-0">
                    <li className="list-inline-item message-img-list">
                      <div>
                        <a
                          className="popup-img d-inline-block m-1"
                          href="/images/small/img-1.jpg"
                          title="Project 1"
                        >
                          <img
                            src="/images/small/img-1.jpg"
                            alt=""
                            className="rounded border"
                          />
                        </a>
                      </div>
                      <div className="message-img-link">
                        <ul className="list-inline mb-0">
                          <li className="list-inline-item">
                            <a href="#">
                              <i className="ri-download-2-line"></i>
                            </a>
                          </li>
                          <li className="list-inline-item dropdown">
                            <a
                              className="dropdown-toggle"
                              href="#"
                              role="button"
                              data-toggle="dropdown"
                              aria-haspopup="true"
                              aria-expanded="false"
                            >
                              <i className="ri-more-fill"></i>
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
                          </li>
                        </ul>
                      </div>
                    </li>

                    <li className="list-inline-item message-img-list">
                      <div>
                        <a
                          className="popup-img d-inline-block m-1"
                          href="/images/small/img-2.jpg"
                          title="Project 2"
                        >
                          <img
                            src="/images/small/img-2.jpg"
                            alt=""
                            className="rounded border"
                          />
                        </a>
                      </div>
                      <div className="message-img-link">
                        <ul className="list-inline mb-0">
                          <li className="list-inline-item">
                            <a href="#">
                              <i className="ri-download-2-line"></i>
                            </a>
                          </li>
                          <li className="list-inline-item dropdown">
                            <a
                              className="dropdown-toggle"
                              href="#"
                              role="button"
                              data-toggle="dropdown"
                              aria-haspopup="true"
                              aria-expanded="false"
                            >
                              <i className="ri-more-fill"></i>
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
                          </li>
                        </ul>
                      </div>
                    </li>
                  </ul>
                  <p className="chat-time mb-0">
                    <i className="ri-time-line align-middle"></i>
                    <span className="align-middle">10:09</span>
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

              <div className="conversation-name">Doris Brown</div>
            </div>
          </div>
        </li>

        <li className="right">
          <div className="conversation-list">
            <div className="chat-avatar">
              <img src="/images/users/avatar-1.jpg" alt="" />
            </div>

            <div className="user-chat-content">
              <div className="ctext-wrap">
                <div className="ctext-wrap-content">
                  <div className="card p-2 mb-2">
                    <div className="media align-items-center">
                      <div className="avatar-sm mr-3">
                        <div className="avatar-title bg-soft-primary text-primary rounded font-size-20">
                          <i className="ri-file-text-fill"></i>
                        </div>
                      </div>
                      <div className="media-body">
                        <div className="text-left">
                          <h5 className="font-size-14 mb-1">admin_v1.0.zip</h5>
                          <p className="text-muted font-size-13 mb-0">
                            12.5 MB
                          </p>
                        </div>
                      </div>

                      <div className="ml-4">
                        <ul className="list-inline mb-0 font-size-20">
                          <li className="list-inline-item">
                            <a href="#" className="text-muted">
                              <i className="ri-download-2-line"></i>
                            </a>
                          </li>
                          <li className="list-inline-item dropdown">
                            <a
                              className="dropdown-toggle text-muted"
                              href="#"
                              role="button"
                              data-toggle="dropdown"
                              aria-haspopup="true"
                              aria-expanded="false"
                            >
                              <i className="ri-more-fill"></i>
                            </a>
                            <div className="dropdown-menu dropdown-menu-right">
                              <a className="dropdown-item" href="#">
                                Share
                                <i className="ri-share-line float-right text-muted"></i>
                              </a>
                              <a className="dropdown-item" href="#">
                                Delete
                                <i className="ri-delete-bin-line float-right text-muted"></i>
                              </a>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <p className="chat-time mb-0">
                    <i className="ri-time-line align-middle"></i>
                    <span className="align-middle">10:16</span>
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

              <div className="conversation-name">Patricia Smith</div>
            </div>
          </div>
        </li>

        <li>
          <div className="conversation-list">
            <div className="chat-avatar">
              <img src="/images/users/avatar-4.jpg" alt="" />
            </div>

            <div className="user-chat-content">
              <div className="ctext-wrap">
                <div className="ctext-wrap-content">
                  <p className="mb-0">
                    typing
                    <span className="animate-typing">
                      <span className="dot"></span>
                      <span className="dot"></span>
                      <span className="dot"></span>
                    </span>
                  </p>
                </div>
              </div>

              <div className="conversation-name">Doris Brown</div>
            </div>
          </div>
        </li>
      */}
      </ul>
    </ConversationStyles>
  );
};

export default Conversation;
