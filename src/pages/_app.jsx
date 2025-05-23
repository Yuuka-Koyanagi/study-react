import Head from "next/head";

import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

import { WelcomePageLayout } from "@/components/layouts/WelcomePageLayout";

import "@/styles/globals.css";
import styles from "@/styles/App.module.css";
import { geistSans, geistMono } from "@/styles/fonts";

export const App = ({ Component, pageProps }) => {
  const getLayout = Component.getLayout || (
    page => <WelcomePageLayout fileName={pageProps.fileName}>{page}</WelcomePageLayout>
  );

  return (
    <>
      <Head>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={`${styles.page} ${geistSans.variable} ${geistMono.variable}`}>
        <Header />

        <main>
          {getLayout(<Component {...pageProps} />)}
        </main>

        <Footer />
      </div>
    </>
  );
};
export default App;
