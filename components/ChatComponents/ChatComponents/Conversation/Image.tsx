import React, { useState, useRef } from "react";
import Moment from "react-moment";
import { SRLWrapper } from "simple-react-lightbox";
import { useOnClickOutside } from "components/utils/hooks/useClickOutside";
import DropDownMenu from "./DropDownMenu";
import { ForwardedStyles } from "./Message";
import styled from "styled-components";

interface Props {
  user: any;
  chat: any;
  right?: boolean;
  i: number;
  setCurrentMessage: any;
}

const ImagesMessage: React.FC<Props> = ({
  user,
  chat,
  i,
  setCurrentMessage,
}) => {
  const ref = useRef();

  const [Toggle, SetToggle] = useState(false);

  useOnClickOutside(ref, () => SetToggle(false));
  const Image = !chat.image.includes(".pdf");
  const pdf = chat.image.includes(".pdf");

  return (
    //@ts-ignore
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
        <div className="user-chat-content">
          <div className="ctext-wrap">
            {chat.forwarded && (
              <ForwardedStylesExtended>Forwarded</ForwardedStylesExtended>
            )}
            <div className="ctext-wrap-content">
              <ul className="list-inline message-img mb-0">
                <li className="list-inline-item message-img-list">
                  <div>
                    <SRLWrapper>
                      {Image && (
                        <img
                          src={chat.image}
                          alt={chat.from.username}
                          className="rounded border"
                        />
                      )}
                    </SRLWrapper>
                    {pdf && (
                      <PdfLink target="_blank" href={chat.image}>
                        <img
                          src="https://upload.wikimedia.org/wikipedia/commons/8/87/PDF_file_icon.svg"
                          alt="pdf file"
                        />
                      </PdfLink>
                    )}
                  </div>

                  {chat.reactions?.length
                    ? chat.reactions?.map((reaction: any, i: number) => (
                        <i
                          key={i}
                          style={{
                            position: "absolute",
                            fontSize: "2.5rem",
                            bottom: "0.2rem",
                            right: "-4rem",
                          }}
                        >
                          {[
                            ...new Set(
                              chat.reactions?.map((r: any) => r.content)
                            ),
                          ]}
                          <span className="text-white">
                            {" "}
                            {chat.reactions.length >= 1 &&
                              chat.reactions.length}
                          </span>
                        </i>
                      ))
                    : ""}
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

            <DropDownMenu
              setCurrentMessage={setCurrentMessage}
              i={i}
              SetToggle={SetToggle}
              Toggle={Toggle}
              user={user}
              chat={chat}
              copyText={chat.image}
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

const PdfLink = styled.a`
  font-size: 2rem;
  color: inherit;
`;

const ForwardedStylesExtended = styled(ForwardedStyles)`
  right: 5.5rem;
`;

export default ImagesMessage;
