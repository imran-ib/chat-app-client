import React from "react";
import { useRemoveFriendMutation, FriendsDocument } from "generated/graphql";
import { toast } from "react-toastify";
import { useChatLeftSideStore } from "components/ChatComponents/ChatState";

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
  const { otherUser } = props;

  const [RemoveFriend, { loading }] = useRemoveFriendMutation({
    variables: {
      FriendId: otherUser.id,
    },
    onError: (err) => toast.error(err.message),
    refetchQueries: [{ query: FriendsDocument }],
    onCompleted: () => {
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
