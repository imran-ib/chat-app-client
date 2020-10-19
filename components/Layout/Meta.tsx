import React from "react";
import Head from "next/head";

const Meta = () => (
  <Head>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta charSet="utf-8" />
    {/* Bootstrap Css */}

    <link
      href="/css/bootstrap-dark.min.css"
      id="bootstrap-dark-style"
      rel="stylesheet"
      type="text/css"
    />

    {/* Icons Css */}
    <link href="/css/icons.min.css" rel="stylesheet" type="text/css" />
    {/* App Css */}
    <link
      href="/css/app-dark.min.css"
      id="app-dark-style"
      rel="stylesheet"
      type="text/css"
    />
    <script src="https://widget.cloudinary.com/v2.0/global/all.js" type="text/javascript">
</script>
  </Head>
);

export default Meta;
