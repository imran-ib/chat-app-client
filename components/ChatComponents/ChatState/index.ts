import create from "zustand";
import { devtools, redux } from "zustand/middleware";
import { reducer, initialState } from "./Reducers";

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
