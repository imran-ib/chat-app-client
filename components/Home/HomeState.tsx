import create from "zustand";

export const useStore = create((set) => ({
  Register: true,
  Login: false,
  ForgotPassword: false,

  setShowRegister: () =>
    set(() => ({
      Register: true,
      Login: false,
      ForgotPassword: false,
    })),
  setShowLogin: () =>
    set(() => ({
      Register: false,
      Login: true,
      ForgotPassword: false,
    })),
  setShowForgetPassword: () =>
    set(() => ({
      ForgotPassword: true,
      Register: false,
      Login: false,
    })),
}));
