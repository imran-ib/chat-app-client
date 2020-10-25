import gql from "graphql-tag";

//REVIEW
// Chats
export const Users = gql`
  query Users {
    users {
      id
      username
      email
      avatar
      isActive
      lastSeen
    }
  }
`;
export const Friends = gql`
  query Friends {
    Friends {
      friends {
        id
        username
        email
        avatar
        isActive
        lastSeen
        MessagesRecieved(last: 1) {
          content
          createdAt
        }
        MessagesSent(last: 1) {
          content
          createdAt
        }
      }
    }
  }
`;

export const CurrentUser = gql`
  query CurrentUser {
    CurrentUser {
      id
      username
      email
      avatar
      isActive
      lastSeen
    }
  }
`;

export const CreateUser = gql`
  mutation CreateUser($email: String!, $username: String!, $password: String) {
    CreateUser(email: $email, username: $username, password: $password) {
      token
      user {
        id
        username
        avatar
        email
      }
    }
  }
`;

export const PasswordLogin = gql`
  mutation PasswordLogin($emailOrUsername: String!, $password: String) {
    PasswordLogin(emailOrUsername: $emailOrUsername, password: $password) {
      token
      user {
        id
        email
      }
    }
  }
`;

export const OPTLogin = gql`
  mutation OTPLogin($emailOrUsername: String!) {
    OTPLogin(emailOrUsername: $emailOrUsername)
  }
`;

export const VerifyOPT = gql`
  mutation VerifyOPT($OTP: Int!, $username: String!) {
    ValidateOTP(OTP: $OTP, username: $username) {
      token
      user {
        id
        avatar
        username
      }
    }
  }
`;

export const RequestResetPassword = gql`
  mutation RequestResetPassword($emailOrUsername: String!) {
    RequestResetPassword(emailOrUsername: $emailOrUsername)
  }
`;

export const ResetPassword = gql`
  mutation ResetPassword(
    $token: String!
    $password: String!
    $ConfirmPassword: String!
  ) {
    ResetPassword(
      token: $token
      password: $password
      ConfirmPassword: $ConfirmPassword
    ) {
      token
      user {
        username
      }
    }
  }
`;

export const GoogleAuth = gql`
  mutation GoogleAuth($email: String!, $images: String!, $googleId: String) {
    GoogleAuth(email: $email, images: $images, googleId: $googleId) {
      token
      user {
        id
        email
        avatar
        username
      }
    }
  }
`;

export const GetUsers = gql`
  query GetUsers($emailOrUsername: String!) {
    GetUsers(emailOrUsername: $emailOrUsername) {
      id
      username
      avatar
    }
  }
`;

export const AddFriend = gql`
  mutation addFriend($id: Int!) {
    AddFriend(id: $id)
  }
`;

export const ConfirmFriendRequest = gql`
  mutation ConfirmFriendRequest($id: Int!) {
    ConfirmFriendRequest(id: $id)
  }
`;
export const FriendRequestSub = gql`
  subscription FriendRequestSub {
    FriendRequestSub {
      sender {
        id
        username
        avatar
      }
      id
    }
  }
`;

export const GetFriendRequests = gql`
  query GetFriendRequests {
    GetFriendRequests {
      id
      createdAt
      sender {
        id
        avatar
        username
      }
    }
  }
`;


// export const SetUserInactive = gql`
//   mutation SetUserInactive($Id: number) {
//     SetUserInactive(id: $id)
//   }
// `;
