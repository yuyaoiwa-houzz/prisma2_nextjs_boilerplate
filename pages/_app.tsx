import React from "react";
import { withUrqlClient } from "next-urql";
import { AppProps } from "next/app";

// the URL to /api/graphql
const GRAPHQL_ENDPOINT = `${process.env.VERCEL_URL}/api/app`;

const App = ({ Component, pageProps }: AppProps) => {
  return <Component {...pageProps} />;
};

export default withUrqlClient({ url: GRAPHQL_ENDPOINT, fetch })(App);
