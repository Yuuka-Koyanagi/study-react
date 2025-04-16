import Head from "next/head";

import { useEffect } from "react";
import { useRouter } from "next/router";

import { getDescriptions } from "@/data/layouts/WelcomePageLayout/descriptions";

import { Counter } from "./Counter";
import { Links } from "./Links";
import { TextBox } from "@/components/layouts/WelcomePageLayout/TextBox";

import styles from "./WelcomePage.module.css";

export const WelcomePageLayout = ({ fileName }) => {
  const router = useRouter();

  useEffect(() => {
    document.body.style.backgroundColor =
      router.pathname === "/"
        ? "lightblue"
        : "";

    return () => document.body.style.backgroundColor = "";
  }, [router.pathname]);

  return (
    <>
      <Head>
        <title>{fileName}</title>
      </Head>

      <Counter />

      <TextBox />

      <h1 className={styles.headline}>{fileName} Page</h1>

      <ol>
        {getDescriptions(fileName).map(c => <li key={c}>{c}</li>)}
      </ol>

      <Links />
    </>
  );
};
