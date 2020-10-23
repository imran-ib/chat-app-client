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
