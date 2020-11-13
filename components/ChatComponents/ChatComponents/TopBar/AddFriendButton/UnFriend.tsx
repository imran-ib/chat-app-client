import React from "react";
import {
  useRemoveFriendMutation,
  FriendsDocument,
  GetChatsDocument,
} from "generated/graphql";
import { toast } from "react-toastify";
import { useChatLeftSideStore } from "components/ChatComponents/ChatState";
import { useConversationStore } from "components/ChatComponents/ChatState";

interface Props {
  otherUser: {
    MessagesRecieved: [];
    MessagesSent: [];
    id: number;
    avatar: string;
    email: string;
    isActive: boolean;
    lastSeen: string;
    username: string;
  };
}

const UnFriend = (props: Props) => {
  const setChats: any = useChatLeftSideStore((state) => state.setChats);
  const dispatch = useConversationStore((state) => state.dispatch);
  const { otherUser } = props;

  const [RemoveFriend, { loading }] = useRemoveFriendMutation({
    variables: {
      FriendId: otherUser.id,
    },
    onError: (err) => toast.error(err.message),
    refetchQueries: [{ query: FriendsDocument }, { query: GetChatsDocument }],

    onCompleted: () => {
      //@ts-ignore
      dispatch({
        type: "SET_USER",
        payload: { user: null },
      });
      setChats();
      toast.success(`Success! Contact removed `);
    },
  });

  return (
    <>
      <a onClick={() => RemoveFriend()} className="dropdown-item">
        {loading ? "Wait.." : "Remove Contact"}
      </a>
    </>
  );
};

export default UnFriend;
