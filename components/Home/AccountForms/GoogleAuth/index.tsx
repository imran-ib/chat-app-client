import React from "react";
import { useGoogleAuthMutation, useCurrentUserQuery } from "generated/graphql";
import GoogleLogin from "react-google-login";
import { useAuthStore } from "components/Auth/Auth";
import { useRouter } from "next/router";
import Spinner from "react-bootstrap/Spinner";

const GoogleAuth = () => {
  const Router = useRouter();
  const dispatch = useAuthStore((state) => state.dispatch);
  const {
    data,
    loading: UserLoading,
    error,
    called,
    refetch,
  } = useCurrentUserQuery();

  const [GoogleAuth, { loading }] = useGoogleAuthMutation({
    onCompleted: (data) => {
      // @ts-ignore
      dispatch({ type: "Login", payload: data?.GoogleAuth });
      if (data && !UserLoading && !error && called) refetch();
      Router.push("/user/chat");
    },
  });
  if (loading) return <Spinner animation="grow" />;
  return (
    <GoogleLogin
      disabled={loading}
      className="bg-secondary text-light d-flex ml-auto mr-auto mb-5"
      clientId="639945224372-qtkhv5ko9eppb8ibmufjlu4mge4un7rv.apps.googleusercontent.com"
      buttonText={loading ? "Please Wait..." : "Or Login With Google"}
      onSuccess={(responseGoogle) => {
        GoogleAuth({
          variables: {
            //   @ts-ignore
            email: responseGoogle?.profileObj.email,
            //   @ts-ignore
            images: responseGoogle?.profileObj.imageUrl,
            //   @ts-ignore
            googleId: responseGoogle?.profileObj.googleId,
          },
        });
      }}
      cookiePolicy={"single_host_origin"}
    />
  );
};

export default GoogleAuth;
