import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Inter } from "next/font/google";
import Head from "next/head";

const inter = Inter({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
});
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link rel="icon" href="/images/favicon.ico" type="image/x-icon" />
        <meta name="theme-color" content="#ffffff" />
      </Head>
      <main className={inter.className + " scroll-smooth"}>
        <Component {...pageProps} />
      </main>
    </>
  );
}

export default MyApp;
