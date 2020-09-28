import { AppProps } from "next/app";
import { ApolloProvider } from "@apollo/react-hooks";
import withData from "../components/lib/withData";
import { GlobalStyles } from "../components/styles/Global";
//Style Sheets
import "bootstrap/dist/css/bootstrap.min.css";
interface MyProps extends AppProps {
  apollo: any;
}

function MyApp({ Component, pageProps, apollo }: MyProps) {
  return (
    <ApolloProvider client={apollo}>
      <GlobalStyles />
      <Component {...pageProps} />
    </ApolloProvider>
  );
}

export default withData(MyApp);
