import gql from "graphql-tag";

export const CurrentUser = gql`
  query CurrentUser {
    CurrentUser {
      id
      username
      email
      avatar
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
  mutation PasswordLogin($emailOrUsername: String!, $password: String!) {
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
