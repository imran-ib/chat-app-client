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

  setProfile: () =>
    set((state) => ({
      ...state,
      Profile: true,
      Chats: false,
      Contacts: false,
      Settings: false,
      Group: false,
      openChatForSmallScreen: false,
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
    })),
  setCloseChatForSmallScreen: () =>
    set((state) => ({
      ...state,
      Chats: true,
      openChatForSmallScreen: false,
      Group: false,
      Settings: false,
      Profile: false,
      Contacts: false,
    })),
}));

interface ModalState {
  show: boolean;
  onHide: () => void;
  handleClose: () => void;
  handleShow: () => void;
}
//@ts-ignore
export const useModalStore = create<ModalState>((set) => ({
  show: false,
  onHide: () =>
    set(() => ({
      show: false,
    })),
  handleClose: () =>
    set(() => ({
      show: false,
    })),
  handleShow: () =>
    set(() => ({
      show: true,
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
