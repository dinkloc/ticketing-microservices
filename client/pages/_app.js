import "bootstrap/dist/css/bootstrap.css";
import { SessionProvider } from "next-auth/react";
import buildClient from "../api/build-client";
import Header from "../components/header";
import Head from "next/head";

const AppComponent = ({ Component, pageProps, currentUser }) => {
  return (
    <div>
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <title>Ticket Swap</title>
        <link rel="shortcut icon" href="../static/ticket.ico" />
      </Head>
      <Header currentUser={currentUser} />
      <div className="container">
        <Component currentUser={currentUser} {...pageProps} />
      </div>
    </div>
  );
};

AppComponent.getInitialProps = async (appContext) => {
  const client = buildClient(appContext.ctx);
  const { data } = await client.get("/api/users/currentuser");

  let pageProps = {};
  if (appContext.Component.getInitialProps) {
    pageProps = await appContext.Component.getInitialProps(
      appContext.ctx,
      client,
      data.currentUser
    );
  }

  return {
    pageProps,
    ...data,
  };
};

export default AppComponent;
