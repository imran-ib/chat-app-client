import { User, Messages } from "generated/graphql";

export let initialState = {
  user: null,
  messages: [],
  friends: [],
  request: [],
  GetUsersBlockedStatusData: null,
  NewMessageNotification: null,
};
interface State {
  user?: User;
  messages: Messages[];
  friends?: User[];
  request: [];
  GetUsersBlockedStatusData: any;
  NewMessageNotification: any;
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
    case "DELETE_MESSAGE":
      return {
        ...state,
        messages: state.messages.filter((msg) => msg.id !== action.payload.id),
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
    case "REMOVE_FRIEND_REQUEST_NOTIFICATION":
      return {
        ...state,
        request: state.request.filter(
          (req: any) => req.id !== action.payload.ReqId
        ),
      };
    case "NEW_MESSAGE_NOTIFICATION":
      return {
        ...state,
        NewMessageNotification: action.payload.NewMessageNotification,
      };
    case "USER_CHAT_BLOCKED_STATUS":
      return {
        ...state,
        GetUsersBlockedStatusData: action.payload.status,
      };
    default:
      throw new Error(`Unknown Action Type: ${action.type}`);
  }
};
