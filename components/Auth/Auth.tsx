import { useCurrentUserQuery } from "generated/graphql";
import create from "zustand";
import { AuthReducer } from "./AuthReducer";
import { devtools, redux } from "zustand/middleware";
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

function useUser() {
  const { loading, data, error, called } = useCurrentUserQuery({
    //every five second
    pollInterval: 5000,
  });

  if (data && !loading && !error && called) {
    return data.CurrentUser;
  } else {
    return null;
  }
}
const initialState = null;

const useAuthStore = create(
  // Connects store to devtools
  // Without reducers and action-types you would see "setState" logged out instead
  devtools(
    // Transforms our store into a redux action dispatcher ...
    // Adds a dispatch method to the store as well as to the api
    redux(AuthReducer, initialState)
  )
);

// const useAuthStore = create(
//   devtools((set) => ({
//     user: null,
//     //@ts-ignore
//     dispatch: (args) => set((state) => AuthReducer(state, args)),
//   }))
// );

export { useUser, useAuthStore };
