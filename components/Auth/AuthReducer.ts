export const AuthReducer = (state: any, action: any) => {
  switch (action.type) {
    case "Login":
      const token: string = action.payload.token;
      localStorage.setItem("token", token);
      return {
        ...state,
        user: action.payload.user,
      };
    case "Logout":
      localStorage.removeItem("token");
      return {
        ...state,
        user: null,
      };
    default:
      throw new Error(`Unknown Action Type: ${action.type}`);
  }
};
