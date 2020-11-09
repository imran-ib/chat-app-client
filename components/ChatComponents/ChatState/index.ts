import create from "zustand";
import { devtools, redux } from "zustand/middleware";
import { reducer, initialState } from "./Reducers";

export const useChatLeftSideStore = create((set) => ({
  Chats: true,
  Profile: false,
  Contacts: false,
  Settings: false,
  Group: false,
  openChatForSmallScreen: false,
  otherUsersProfileActive: false,

  setProfile: () =>
    set((state) => ({
      ...state,
      Profile: true,
      Chats: false,
      Contacts: false,
      Settings: false,
      Group: false,
      openChatForSmallScreen: false,
      otherUsersProfileActive: false,
    })),
  setChats: () =>
    set((state) => ({
      ...state,
      Chats: true,
      Profile: false,
      Contacts: false,
      Settings: false,
      Group: false,
      openChatForSmallScreen: false,
      otherUsersProfileActive: false,
    })),
  setContacts: () =>
    set((state) => ({
      ...state,
      Contacts: true,
      Profile: false,
      Chats: false,
      Settings: false,
      Group: false,
      openChatForSmallScreen: false,
      otherUsersProfileActive: false,
    })),
  setSettings: () =>
    set((state) => ({
      ...state,
      Settings: true,
      Profile: false,
      Chats: false,
      Contacts: false,
      Group: false,
      openChatForSmallScreen: false,
      otherUsersProfileActive: false,
    })),

  setGroup: () =>
    set((state) => ({
      ...state,
      Group: true,
      Settings: false,
      Profile: false,
      Chats: false,
      Contacts: false,
      openChatForSmallScreen: false,
      otherUsersProfileActive: false,
    })),
  setOpenChatForSmallScreen: () =>
    set((state) => ({
      ...state,
      openChatForSmallScreen: true,
      Group: false,
      Settings: false,
      Profile: false,
      Chats: false,
      Contacts: false,
      otherUsersProfileActive: false,
    })),
  setCloseChatForSmallScreen: () =>
    set((state) => ({
      ...state,
      Chats: true,
      openChatForSmallScreen: false,
      otherUsersProfileActive: false,
      Group: false,
      Settings: false,
      Profile: false,
      Contacts: false,
    })),
  setOtherUsersProfileActive: () =>
    set((state) => ({
      ...state,
      otherUsersProfileActive: true,
    })),
  setOtherUsersProfileClose: () =>
    set((state) => ({
      ...state,
      otherUsersProfileActive: false,
    })),
}));

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
