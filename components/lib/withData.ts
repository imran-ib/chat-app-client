import { ApolloClient, ApolloLink, InMemoryCache } from "@apollo/client";
import { onError } from "@apollo/link-error";
import { getDataFromTree } from "@apollo/react-ssr";
import { createUploadLink } from "apollo-upload-client";
import withApollo from "next-with-apollo";

const endpoint = `http://localhost:4000`;
// const prodEndpoint = "https://ebazar-server.herokuapp.com/";

function createClient({ headers, initialState }: any) {
  const client = new ApolloClient({
    link: ApolloLink.from([
      onError(({ graphQLErrors, networkError }) => {
        if (graphQLErrors)
          graphQLErrors.forEach(({ message, locations, path }) =>
            console.log(
              `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
            )
          );
        if (networkError)
          console.log(
            `[Network error]: ${networkError}. Backend is unreachable. Is it running?`
          );
      }),
      // this uses apollo-link-http under the hood, so all the options here come from that package
      createUploadLink({
        uri: process.env.NODE_ENV === "development" ? endpoint : endpoint,
       
        fetchOptions: {
          credentials: "include",
        },
        // pass the headers along from this request. This enables SSR with logged in state
        headers,
      }),
    ]),
    cache: new InMemoryCache().restore(initialState || {}),
  });
  // client.clearStore();
  return client;
}

//@ts-ignore
export default withApollo(createClient, {
  getDataFromTree,
});
