import { AppProps } from "next/app";
import { ApolloProvider } from "@apollo/react-hooks";
import SimpleReactLightbox from "simple-react-lightbox";

import withData from "../components/lib/withData";
//Style Sheets
import "bootstrap/dist/css/bootstrap.min.css";
import "emoji-mart/css/emoji-mart.css";

interface MyProps extends AppProps {
  apollo: any;
}

function MyApp({ Component, pageProps, apollo }: MyProps) {
  return (
    <ApolloProvider client={apollo}>
      <SimpleReactLightbox>
        <Component {...pageProps} />
      </SimpleReactLightbox>
    </ApolloProvider>
  );
}

export default withData(MyApp);
