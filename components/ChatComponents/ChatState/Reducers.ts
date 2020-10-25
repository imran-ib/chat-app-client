import { User, Messages } from "generated/graphql";

export let initialState = {
  user: null,
  messages: [],
  friends: [],
  request: [],
};
interface State {
  user?: User;
  messages: Messages[];
  friends?: User[];
  request: [];
}

export const reducer = (state: State, action: any) => {
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.payload.user,
      };
    case "SET_MESSAGES":
      return {
        ...state,
        messages: action.payload.messages,
      };
    case "NEW_MESSAGE":
      return {
        ...state,
        messages: state.messages?.length && [
          ...state.messages,
          action.payload.newMessage,
        ],
      };
    case "FRIENDS":
      return {
        ...state,
        friends: action.payload.friends,
      };

    case "ADD_REACTION":
      let MessagesCopy = [...state.messages];
      let ReactedMessageIndex = MessagesCopy.findIndex(
        (msg) => msg.id === action.payload.Reaction.messageId
      );
      let MessageCopy;
      let ReactionCopy;
      let NewReaction;
      if (ReactedMessageIndex > -1) {
        MessageCopy = { ...MessagesCopy[ReactedMessageIndex] };
        ReactionCopy = [...MessagesCopy[ReactedMessageIndex]?.reactions];
        NewReaction = action.payload.Reaction;

        MessagesCopy[ReactedMessageIndex] = {
          ...MessageCopy,
          reactions: [...ReactionCopy, NewReaction],
        };
      }
      return {
        ...state,
        messages: [...MessagesCopy],
      };
    case "ADD_FRIEND_REQUEST_NOTIFICATION":
      return {
        ...state,
        request: action.payload.Request,
      };

    default:
      throw new Error(`Unknown Action Type: ${action.type}`);
  }
};
