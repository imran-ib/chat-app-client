import {
  ApolloClient,
  createHttpLink,
  InMemoryCache,
  split,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import withApollo from "next-with-apollo";
import { getDataFromTree } from "@apollo/react-ssr";
import * as ws from "ws";
import { WebSocketLink } from "@apollo/client/link/ws";
import { getMainDefinition } from "@apollo/client/utilities";

function createApolloClient() {
  // Declare variable to store authToken
  let token: string | null;

  const httpLink = createHttpLink({
    uri: "http://localhost:4000/",
    credentials: "same-origin",
  });

  const wsLink = process.browser
    ? new WebSocketLink({
        uri: `ws://localhost:4000/graphql`,
        options: {
          reconnect: true,
          connectionParams: {
            Authorization:
              typeof window !== "undefined" &&
              `Bearer ${localStorage.getItem("token")}`,
          },
        },
      })
    : null;

  const authLink = setContext((_, { headers }) => {
    // get the authentication token from local storage if it exists
    if (typeof window !== "undefined") {
      token = localStorage.getItem("token");
    }
    // return the headers to the context so httpLink can read them
    return {
      headers: {
        ...headers,
        Authorization: token ? `Bearer ${token}` : "",
      },
    };
  });

  const splitLink = process.browser
    ? split(
        ({ query }) => {
          const definition = getMainDefinition(query);
          return (
            definition.kind === "OperationDefinition" &&
            definition.operation === "subscription"
          );
        },
        //@ts-ignore
        wsLink,
        authLink.concat(httpLink)
      )
    : authLink.concat(httpLink);

  const client = new ApolloClient({
    ssrMode: typeof window === "undefined",
    link: splitLink,
    cache: new InMemoryCache(),
  });

  return client;
}

//@ts-ignore
export default withApollo(createApolloClient, {
  getDataFromTree,
});
