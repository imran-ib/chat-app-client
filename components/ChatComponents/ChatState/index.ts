import create from "zustand";
import { devtools, redux, } from "zustand/middleware";

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



export const reducer = (state: any, action: any) => {
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.payload.user,
      };
     default:
      throw new Error(`Unknown Action Type: ${action.type}`);
  }
};

const initialState = null


export const useConversationStore = create(
  // Connects store to devtools
  // Without reducers and action-types you would see "setState" logged out instead
  devtools(
    // Transforms our store into a redux action dispatcher ...
    // Adds a dispatch method to the store as well as to the api
    redux(reducer, initialState)
  )
)