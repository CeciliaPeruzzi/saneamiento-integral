"use client";
import { appWithTranslation } from 'next-i18next';
import '../css/globals.css';
import '../i18n';

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default appWithTranslation(MyApp);