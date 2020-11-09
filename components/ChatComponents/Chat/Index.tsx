import React, { useEffect } from "react";
import SideBarComponent from "../Sidebarcomponents";
import ChatComponents from "../ChatComponents";
import {
  useNewMessageSubscription,
  Messages,
  useReactionToMessageSubscription,
  useFriendRequestSubSubscription,
  useDeleteMessageSubscriptionSubscription,
} from "generated/graphql";
import { useConversationStore } from "components/ChatComponents/ChatState";
import { toast } from "react-toastify";
import useNotification from "components/utils/hooks/useNotification";

const Chat = () => {
  const { Notify, username, SenderId, content } = useNotification();
  const user = useConversationStore((state) => state.user);

  const dispatch = useConversationStore((state) => state.dispatch);
  //@ts-ignore
  const Messages: Messages[] = useConversationStore((state) => state.messages);

  const { data, loading } = useNewMessageSubscription({
    // New Message Notification To User if The Chat is Not open
    onSubscriptionData: (data) =>
      //@ts-ignore
      dispatch({
        type: "NEW_MESSAGE_NOTIFICATION",
        payload: {
          NewMessageNotification: data.subscriptionData.data?.NewMessage,
        },
      }),
  });

  const {
    data: MessageId,
    loading: DeleteLoading,
  } = useDeleteMessageSubscriptionSubscription();
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

  useEffect(() => {
    !DeleteLoading &&
      //@ts-ignore
      dispatch({
        type: "DELETE_MESSAGE",
        payload: { id: MessageId?.DeleteMessageSub.id },
      });
  }, [MessageId]);

  if (Notify) {
    // User is same user from top bar (if sender is same use with whom we are chatting then don't send notification)
    //@ts-ignore
    if (SenderId !== user?.id) {
      toast.success(`A New Message From ${username}  "${content}"`);
      //@ts-ignore
      dispatch({
        type: "NEW_MESSAGE_NOTIFICATION",
        payload: {
          NewMessageNotification: null,
        },
      });
    }
  }

  return (
    <div className="layout-wrapper d-lg-flex">
      <SideBarComponent />
      <ChatComponents />
    </div>
  );
};

export default Chat;
