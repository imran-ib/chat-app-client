import { useCurrentUserQuery } from "generated/graphql";
import create from "zustand";
import { AuthReducer } from "./AuthReducer";
import { devtools } from "zustand/middleware";
import jwt_decode from "jwt-decode";

// Remove token if it is expire
let token;
if (typeof window !== "undefined") {
  token = localStorage.getItem("token");
}
if (token) {
  let decoded = jwt_decode(token);
  const TimeNow = Date.now();
  //@ts-ignore
  if (TimeNow > decoded.exp * 1000 && typeof window !== "undefined") {
    localStorage.removeItem("token");
  }
}
const useAuthStore = create(
  devtools((set) => ({
    user: null,
    //@ts-ignore
    dispatch: (args) => set((state) => AuthReducer(state, args)),
  }))
);

function useUser() {
  const { loading, data, error, called } = useCurrentUserQuery();

  if (data && !loading && !error && called) {
    return data.CurrentUser;
  } else {
    return null;
  }
}

export { useUser, useAuthStore };
