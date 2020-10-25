import { AppProps } from "next/app";
import { ApolloProvider } from "@apollo/react-hooks";
import SimpleReactLightbox from "simple-react-lightbox";
import { ToastContainer } from "react-toastify";

import withData from "../components/lib/withData";
//Style Sheets
import "bootstrap/dist/css/bootstrap.min.css";
import "emoji-mart/css/emoji-mart.css";
import "react-toastify/dist/ReactToastify.min.css";

interface MyProps extends AppProps {
  apollo: any;
}

function MyApp({ Component, pageProps, apollo }: MyProps) {
  return (
    <ApolloProvider client={apollo}>
      <SimpleReactLightbox>
        <ToastContainer
          position="bottom-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          draggable
          pauseOnHover
        />
        <Component {...pageProps} />
      </SimpleReactLightbox>
    </ApolloProvider>
  );
}

export default withData(MyApp);
