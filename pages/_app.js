import App from "next/app";
import Head from "next/head";
import React from "react";
import { ApolloProvider } from "@apollo/react-hooks";
import withApolloClient from "../lib/with-apollo-client";
import { Global, css } from "@emotion/core";

class MyApp extends App {
  render() {
    const { Component, pageProps, apolloClient } = this.props;
    return (
      <ApolloProvider client={apolloClient}>
        <Head>
          <link
            href={`https://fonts.googleapis.com/css?family=Noto+Sans+TC&display=swap`}
            rel="stylesheet"
            key="google-font-noto-sans-tc"
          />
        </Head>
        <Global
          styles={css`
            * {
              font-family: "Noto Sans TC", sans-serif;
              color: #222;
            }
            body {
              background-color: #8d9ec6;
            }
          `}
        />
        <Component {...pageProps} />
      </ApolloProvider>
    );
  }
}

export default withApolloClient(MyApp);
