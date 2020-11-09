import React, { useState, useRef } from "react";
import { useConversationStore } from "components/ChatComponents/ChatState";
import { useSendMessageMutation } from "generated/graphql";
import { useUser } from "components/Auth/Auth";
import { useForm } from "react-hook-form";
import Alert from "react-bootstrap/Alert";
import { Picker } from "emoji-mart";
import { useOnClickOutside } from "components/utils/hooks/useClickOutside";
import { ChatSpinner } from "components/utils/Spinners/ChatSidebarSpinners";
import styled from "styled-components";
import useWindowSize from "@rooks/use-window-size";
import { AccountForm } from "components/styles/SharedStyles";

const ChatInput = () => {
  const [isLoading, setLoading] = useState(false);
  const [uploadedImage, setImage] = useState();
  const [message, SetMessage] = useState("");
  const [emojiPickerState, SetEmojiPicker] = useState(false);
  const { handleSubmit } = useForm();
  const SentTo = useConversationStore((state) => state.user);
  const user = useUser();
  const ref = useRef();
  const inputFile = useRef(null);
  // this should be send messages not get message
  const [getMessage, { loading, error }] = useSendMessageMutation();
  useOnClickOutside(ref, () => SetEmojiPicker(false));
  const { innerWidth } = useWindowSize();

  if (isLoading || loading) return <ChatSpinner />;
  // console.log("ChatInput -> uploadedImage", uploadedImage)

  const onSubmit = () => {
    getMessage({
      variables: {
        //@ts-ignore
        Receiver: SentTo?.username,
        //@ts-ignore
        Sender: user?.username,
        content: message,
        image: "",
      },
    }).then((_res) => {
      SetMessage("");
    });
  };

  function triggerPicker(event: React.ChangeEvent<any>) {
    event.preventDefault();
    SetEmojiPicker(!emojiPickerState);
  }

  let emojiPicker;
  if (emojiPickerState) {
    emojiPicker = (
      <Picker
        title="Pick your emoji…"
        emoji="point_up"
        style={{ position: "absolute", bottom: "20px", right: "20px" }}
        // @ts-ignore
        onSelect={(emoji) => SetMessage(message + emoji.native)}
      />
    );
  }

  const onButtonClick = () => {
    // `current` points to the mounted file input element
    //@ts-ignore
    inputFile?.current?.click();
  };

  if (!SentTo)
    return (
      <p style={{ textAlign: "center", fontSize: "2rem", padding: "2rem" }}>
        Select User to Start Conversation Or Add New User
      </p>
    );
  if (error)
    return (
      <Alert variant="danger" style={{ fontSize: "1.5rem" }}>
        {error.message}
      </Alert>
    );

  const handleOnChange = async ({ target }: any) => {
    setLoading(true);
    const { files }: any = target;
    const data = new FormData();
    data.append("file", files[0]);
    data.append("upload_preset", "ebazar");
    data.append("folder", "iChat");
    const res = await fetch(
      "https://api.cloudinary.com/v1_1/iib-webdevs/image/upload",
      {
        method: "POST",
        body: data,
      }
    );
    const { secure_url, eager } = await res.json();

    setImage(secure_url);
    // largeImage: eager[0].secure_url,

    if (uploadedImage !== "") {
      getMessage({
        variables: {
          //@ts-ignore
          Receiver: SentTo.username,
          //@ts-ignore
          Sender: user?.username,
          content: "",
          image: secure_url,
        },
      });
    }

    setLoading(false);
  };

  return (
    <InputComponentStyles className={innerWidth <= 991 ? "fixed-bottom" : ""}>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <div
          // @ts-ignore
          ref={ref}
          className="p-3 p-lg-4 border-top mb-0"
        >
          <div className="row no-gutters">
            <div className="col">
              <div>
                <input
                  type="text"
                  name="message"
                  className="form-control form-control-lg bg-light border-light"
                  placeholder="Enter Message..."
                  value={message}
                  onChange={(event) => SetMessage(event.target.value)}
                />
              </div>
            </div>
            <div className="col-auto">
              <div className="chat-input-links ml-md-2">
                <ul className="list-inline mb-0">
                  <li className="list-inline-item">
                    <a
                      onClick={triggerPicker}
                      type="button"
                      data-toggle="tooltip"
                      data-placement="top"
                      title="Emoji"
                    >
                      🙂
                      {/* <i className="ri-emotion-happy-line"></i> */}
                    </a>
                    {emojiPicker}
                  </li>
                  <li className="list-inline-item">
                    <input
                      name="image"
                      onChange={handleOnChange}
                      type="file"
                      ref={inputFile}
                      style={{ display: "none" }}
                    />

                    <button
                      onClick={onButtonClick}
                      type="button"
                      className="btn btn-link text-decoration-none font-size-16 btn-lg waves-effect"
                      data-toggle="tooltip"
                      data-placement="top"
                      title="Attached File"
                    >
                      <i className="ri-attachment-line"></i>
                    </button>
                  </li>
                  <li className="list-inline-item">
                    <button
                      disabled={loading}
                      type="submit"
                      className="btn btn-primary font-size-16 btn-lg chat-send waves-effect waves-light"
                    >
                      {loading ? (
                        "wait.."
                      ) : (
                        <i className="ri-send-plane-2-fill"></i>
                      )}
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </Form>
    </InputComponentStyles>
  );
};

const InputComponentStyles = styled.div``;

const Form = styled(AccountForm)`
  margin-left: 0;
  margin-right: 0;
`;

export default ChatInput;
