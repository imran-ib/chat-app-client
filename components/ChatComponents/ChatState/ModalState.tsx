import create from "zustand";

interface ModalState {
  show: boolean;
  showFriendsListModal: boolean;
  onHide: () => void;
  handleClose: () => void;
  handleShow: () => void;
  onHideFriendsListModal: () => void;
  handleCloseFriendsListModal: () => void;
  handleShowFriendsListModal: () => void;
}
//@ts-ignore
export const useModalStore = create<ModalState>((set) => ({
  // Friends Request Modal
  show: false,
  // Friends List Modal
  showFriendsListModal: false,

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
  // Friends List Modal
  onHideFriendsListModal: () =>
    set(() => ({
      showFriendsListModal: false,
    })),
  handleCloseFriendsListModal: () =>
    set(() => ({
      showFriendsListModal: false,
    })),
  handleShowFriendsListModal: () =>
    set(() => ({
      showFriendsListModal: true,
    })),
}));
