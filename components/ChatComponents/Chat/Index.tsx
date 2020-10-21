import React, { useEffect } from "react";
import SideBarComponent from "../Sidebarcomponents";
import ChatComponents from "../ChatComponents";
import { useNewMessageSubscription, Messages } from "generated/graphql";
import { useConversationStore } from "components/ChatComponents/ChatState";

const Chat = () => {
  const dispatch = useConversationStore((state) => state.dispatch);
  //@ts-ignore
  const Messages: Messages[] = useConversationStore((state) => state.messages);
  const { data, loading } = useNewMessageSubscription();

  useEffect(() => {
    !loading &&
      //@ts-ignore
      dispatch({
        type: "NEW_MESSAGE",
        payload: { newMessage: data?.NewMessage },
      });
    if (!Messages.length) {
      !loading &&
        //@ts-ignore
        dispatch({
          type: "SET_MESSAGES",
          payload: { messages: [data?.NewMessage] },
        });
    }
  }, [data]);

  return (
    <div className="layout-wrapper d-lg-flex">
      <SideBarComponent />
      <ChatComponents />
    </div>
  );
};

export default Chat;
