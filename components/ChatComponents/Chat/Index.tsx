import React, { useEffect } from "react";
import SideBarComponent from "../Sidebarcomponents";
import ChatComponents from "../ChatComponents";
import {
  useNewMessageSubscription,
  Messages,
  useReactionToMessageSubscription,
  useFriendRequestSubSubscription,
} from "generated/graphql";
import { useConversationStore } from "components/ChatComponents/ChatState";
import { toast } from "react-toastify";

const Chat = () => {
  const dispatch = useConversationStore((state) => state.dispatch);
  //@ts-ignore
  const Messages: Messages[] = useConversationStore((state) => state.messages);
  const { data, loading } = useNewMessageSubscription();
  const {
    data: ReactData,
    loading: ReactLoading,
  } = useReactionToMessageSubscription();
  const {
    data: ReqData,
    loading: ReqLoading,
  } = useFriendRequestSubSubscription({
    onSubscriptionData: () => {
      toast.info("New Friend Request");
    },
  });

  useEffect(() => {
    !ReqLoading &&
      //@ts-ignore
      dispatch({
        type: "ADD_FRIEND_REQUEST_NOTIFICATION",
        payload: { Request: [ReqData?.FriendRequestSub] },
      });
  }, [ReqData]);

  useEffect(() => {
    !ReactLoading &&
      ReactData &&
      //@ts-ignore
      dispatch({
        type: "ADD_REACTION",
        payload: { Reaction: ReactData?.ReactionToMessage },
      });
  }, [ReactData]);

  useEffect(() => {
    !loading &&
      //@ts-ignore
      dispatch({
        type: "NEW_MESSAGE",
        payload: { newMessage: data?.NewMessage },
      });
    //TODO Send New Message Notification
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
