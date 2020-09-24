import gql from "graphql-tag";

export const CreateUser = gql`
  mutation CreateUser {
    createOneUser(data: { email: "imran@test.com", name: "imran" }) {
      id
      name
    }
  }
`;

export const Login = gql`
  mutation Login {
    login(email: "imran@test.com") {
      token
      user {
        id
        name
      }
    }
  }
`;
