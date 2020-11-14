import gql from "graphql-tag";

export const GetMessages = gql`
  query GetMessages($from: String!) {
    GetMessages(from: $from) {
      id
      content
      from {
        id
        username
        avatar
      }
      to {
        id
        username
        avatar
      }
      reactions {
        content
        userId
        messageId
        createdAt
      }
      image
      isSenderFriend
      isSenderFollowing
      ReceiverId
      forwarded
      SenderId
      createdAt
      updatedAt
    }
  }
`;

export const SendMessage = gql`
  mutation SendMessage(
    $Sender: String!
    $Receiver: String!
    $content: String = "Empty Message"
    $image: String = "No Image to display"
  ) {
    SendMessage(
      Sender: $Sender
      Receiver: $Receiver
      content: $content
      image: $image
    ) {
      id
      content
    }
  }
`;
export const ForwardMessage = gql`
  mutation ForwardMessage(
    $Sender: String!
    $Receiver: String!
    $content: String = "Empty Message"
    $image: String = "No Image to display"
  ) {
    ForwardMessage(
      Sender: $Sender
      Receiver: $Receiver
      content: $content
      image: $image
    ) {
      id
      content
      from {
        id
        username
        avatar
      }
      to {
        id
        username
        avatar
      }
      reactions {
        id
        content
        userId
        messageId
        createdAt
      }
      image
      isSenderFriend
      isSenderFollowing
      ReceiverId
      SenderId
      createdAt
      updatedAt
    }
  }
`;

export const NewMessage = gql`
  subscription NewMessage {
    NewMessage {
      id
      content
      from {
        id
        username
        avatar
      }
      to {
        id
        username
        avatar
      }
      reactions {
        id
        content
        userId
        messageId
        createdAt
      }
      image
      isSenderFriend
      isSenderFollowing
      ReceiverId
      SenderId
      createdAt
      updatedAt
    }
  }
`;

export const DeleteMessageSubscription = gql`
  subscription DeleteMessageSubscription {
    DeleteMessageSub {
      id
    }
  }
`;

export const Reaction = gql`
  mutation Reaction($messageId: Int!, $content: String!) {
    CreateReaction(messageId: $messageId, content: $content) {
      id
      createdAt
      content
    }
  }
`;

export const ReactionToMessage = gql`
  subscription ReactionToMessage {
    ReactionToMessage {
      id
      content
      userId
      messageId
      createdAt
    }
  }
`;

export const DeleteMessage = gql`
  mutation DeleteMessage($MessageId: Int!) {
    DeleteMessage(MessageId: $MessageId)
  }
`;

export const DeleteChat = gql`
  mutation DeleteChat($blockerId: Int!, $blockeeId: Int!) {
    DeleteChat(blockerId: $blockerId, blockeeId: $blockeeId)
  }
`;

export const GetChats = gql`
  query GetChats {
    GetChats {
      friend {
        id
        username
        email
        avatar
        isActive
        lastTyped
        lastSeen
        MessagesRecieved(last: 1) {
          id
          ReceiverId
          SenderId
          content
          createdAt
        }
        MessagesSent(last: 1) {
          id
          ReceiverId
          SenderId
          content
          createdAt
        }
      }
    }
  }
`;

export const GetUsersBlockedStatus = gql`
  query GetUsersBlockedStatus($username: String!) {
    GetUsersBlockedStatus(username: $username) {
      id
    }
  }
`;

export const RestoreDeletedChat = gql`
  mutation RestoreDeletedChat($blocker: Int!, $blockee: Int!) {
    RestoreDeletedChat(blocker: $blocker, blockee: $blockee) {
      id
      content
      from {
        id
        username
        avatar
      }
      to {
        id
        username
        avatar
      }
      reactions {
        content
        userId
        messageId
        createdAt
      }
      image
      isSenderFriend
      isSenderFollowing
      ReceiverId
      forwarded
      SenderId
      createdAt
      updatedAt
    }
  }
`;

export const GetUserMedia = gql`
  query GetUsersMedia {
    GetUsersMedia {
      id
      image
    }
  }
`;

export const GetMediaBetweenUsers = gql`
  query GetMediaBetweenUsers($OtherUserId: Int!) {
    GetMediaBetweenUsers(OtherUserId: $OtherUserId) {
      id
      image
    }
  }
`;

export const SearchTermResults = gql`
  query SearchTermResults($term: String!) {
    SearchTermResults(term: $term) {
      id
      content
      createdAt
      from {
        id
        username
        avatar
      }
      to {
        id
        username
        avatar
      }
    }
  }
`;
