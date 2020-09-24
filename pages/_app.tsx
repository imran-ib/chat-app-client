import { AppProps } from "next/app";
import { ApolloProvider } from "@apollo/react-hooks";
import withData from "../components/lib/withData";

interface MyProps extends AppProps {
  apollo: any;
}

function MyApp({ Component, pageProps, apollo }: MyProps) {
  return (
    <ApolloProvider client={apollo}>
      <Component {...pageProps} />
    </ApolloProvider>
  );
}

export default withData(MyApp);
