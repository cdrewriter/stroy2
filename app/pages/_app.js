import App from "next/app";


import { GraphQLProvider } from "graphql-react";
import { withGraphQLApp } from "next-graphql-react";
import Head from "next/head";
import "./styles/main.scss";

import React from "react";


class MyApp extends App {
  render() {
    const { Component, pageProps, graphql } = this.props;
    return (
 
        <GraphQLProvider graphql={graphql}>
          <Head>
            <title>My page</title>
            <meta
              name="viewport"
              content="minimum-scale=1, initial-scale=1, width=device-width"
            />
                <link rel="stylesheet" href="/app/public/styles-fonts.css" type="text/css" charSet="UTF-8" />
              <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.14.0/css/all.min.css"/>

            <link rel="stylesheet" type="text/css" charSet="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" /> 
<link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
          </Head>

          {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}

          <Component {...pageProps} />
        </GraphQLProvider>
     
    );
  }
}

export default withGraphQLApp(MyApp);
