import React from "react";
import {
  useGetMessagesLazyQuery,
  useGetUsersBlockedStatusLazyQuery,
} from "generated/graphql";
import {
  useConversationStore,
  useChatLeftSideStore,
} from "components/ChatComponents/ChatState";
import useWindowSize from "@rooks/use-window-size";
import Moment from "react-moment";

const ListItem = ({ user }: any) => {
  //   const user: User | any = useUser();
  const dispatch = useConversationStore((state) => state.dispatch);
  const messages: any = useConversationStore((state) => state.messages);

  const setOpenChatForSmallScreen: any = useChatLeftSideStore(
    (state) => state.setOpenChatForSmallScreen
  );
  const { innerWidth } = useWindowSize();
  const IsSmallScreen = innerWidth <= 941;

  const [GetUsersBlockedStatus] = useGetUsersBlockedStatusLazyQuery({
    fetchPolicy: "no-cache",
    onCompleted: (data) => {
      //@ts-ignore
      dispatch({
        type: "USER_CHAT_BLOCKED_STATUS",
        payload: { status: data.GetUsersBlockedStatus },
      });
    },
  });

  const [GetMessages] = useGetMessagesLazyQuery({
    fetchPolicy: "no-cache",
    onCompleted: (data) => {
      //@ts-ignore
      dispatch({
        type: "SET_MESSAGES",
        payload: { messages: data.GetMessages },
      });
      if (data && IsSmallScreen) setOpenChatForSmallScreen();
    },
  });

  const LastMessageIndex = messages.length && messages.length - 1;
  const LastMessage = messages[LastMessageIndex];


  return (
    <li
      onClick={() => {
        GetMessages({
          variables: { from: user.username },
        });

        GetUsersBlockedStatus({
          variables: { username: user.username },
        });

        //@ts-ignore
        dispatch({ type: "SET_USER", payload: { user } });
      }}
      key={user.id}
    >
      <a>
        <div className="media">
          <div className="chat-user-img online align-self-center mr-3">
            <img
              //@ts-ignore
              src={user.avatar}
              className="rounded-circle avatar-xs"
              alt="user image"
            />
            <span className="user-status"></span>
          </div>

          <div className="media-body overflow-hidden">
            <h5 className="text-truncate font-size-15 mb-1">{user.username}</h5>
            <p className="chat-user-message text-truncate mb-0">
              {LastMessage?.SenderId === user.id ||
              LastMessage?.ReceiverId === user.id
                ? LastMessage?.content
                : "Hey! there I'm available"}
            </p>
          </div>
          <div className="font-size-11">
            {LastMessage?.SenderId === user.id ||
            LastMessage?.ReceiverId === user.id ? (
              <Moment date={LastMessage.createdAt} fromNow />
            ) : (
              ""
            )}
          </div>
        </div>
      </a>
    </li>
  );
};

export default ListItem;
