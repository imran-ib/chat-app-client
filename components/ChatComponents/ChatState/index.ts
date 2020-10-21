import create from "zustand";
import { devtools, redux } from "zustand/middleware";
import { User, Messages } from "generated/graphql";

export const useChatLeftSideStore = create((set) => ({
  Chats: true,
  Profile: false,
  Contacts: false,
  Settings: false,
  Group: false,

  setProfile: () =>
    set(() => ({
      Profile: true,
      Chats: false,
      Contacts: false,
      Settings: false,
      Group: false,
    })),
  setChats: () =>
    set(() => ({
      Chats: true,
      Profile: false,
      Contacts: false,
      Settings: false,
      Group: false,
    })),
  setContacts: () =>
    set(() => ({
      Contacts: true,
      Profile: false,
      Chats: false,
      Settings: false,
      Group: false,
    })),
  setSettings: () =>
    set(() => ({
      Settings: true,
      Profile: false,
      Chats: false,
      Contacts: false,
      Group: false,
    })),
  setGroup: () =>
    set(() => ({
      Group: true,
      Settings: false,
      Profile: false,
      Chats: false,
      Contacts: false,
    })),
}));

let initialState = {
  user: null,
  messages: [],
  friends: [],
};

interface State {
  user?: User;
  messages: Messages[];
  friends?: User[];
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
    default:
      throw new Error(`Unknown Action Type: ${action.type}`);
  }
};

export const useConversationStore = create(
  // Connects store to devtools
  // Without reducers and action-types you would see "setState" logged out instead
  devtools(
    // Transforms our store into a redux action dispatcher ...
    // Adds a dispatch method to the store as well as to the api
    //@ts-ignore
    redux(reducer, initialState)
  )
);
