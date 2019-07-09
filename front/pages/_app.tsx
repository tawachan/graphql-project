import App, { Container } from "next/app";
import * as React from "react";
import { ApolloClient } from "apollo-client";
import { InMemoryCache } from "apollo-cache-inmemory";
import { HttpLink, createHttpLink } from "apollo-link-http";
import { ApolloProvider } from "react-apollo";
import fetch from "node-fetch";

class CustomizedApp extends App {
  public static async getInitialProps({ Component, router, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

  public render() {
    const apolloClient = new ApolloClient({
      cache: new InMemoryCache(),
      link: createHttpLink({ uri: "http://localhost:4000", fetch: fetch }),
    });
    const { Component, pageProps } = this.props;

    return (
      <ApolloProvider client={apolloClient}>
        <Container>
          <Component {...pageProps} />
        </Container>
      </ApolloProvider>
    );
  }
}

export default CustomizedApp;
