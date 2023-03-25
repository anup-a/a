import "../styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import { inter } from "../utils/fonts";
import { ThemeProvider } from "next-themes";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.svg" type="image/x-icon" />
        <meta name="theme-color" content="#ffffff" />
      </Head>
      <ThemeProvider>
        <main
          className={
            inter.className +
            "scroll-smooth dark:bg-black transition-colors duration-1000 min-h-screen"
          }
        >
          <Component {...pageProps} />
        </main>
      </ThemeProvider>
    </>
  );
}

export default MyApp;
