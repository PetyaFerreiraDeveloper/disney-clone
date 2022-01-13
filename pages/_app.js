import '../styles/globals.css';
import React from 'react';
import { SessionProvider } from "next-auth/react";
import { AppProps } from 'next/app';
 

function MyApp({ Component, pageProps }) {
  return (
    <SessionProvider session={pageProps.session}>
      <Component {...pageProps} />
    </SessionProvider>
  );
}

export default MyApp
