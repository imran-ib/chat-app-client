import create from "zustand";

export const useStore = create((set) => ({
  Register: true,
  Login: false,
  ForgotPassword: false,
  OTPInput: false,
  username: "",
  setUsername: () => set((state) => ({ username: state.username })),

  setShowRegister: () =>
    set(() => ({
      Register: true,
      Login: false,
      ForgotPassword: false,
      OTPInput: false,
    })),
  setShowLogin: () =>
    set(() => ({
      Login: true,
      Register: false,
      ForgotPassword: false,
      OTPInput: false,
    })),
  setShowForgetPassword: () =>
    set(() => ({
      ForgotPassword: true,
      Register: false,
      Login: false,
      OTPInput: false,
    })),
  setOPTInput: () =>
    set(() => ({
      OTPInput: true,
      ForgotPassword: false,
      Register: false,
      Login: false,
    })),
}));
