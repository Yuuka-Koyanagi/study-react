import Head from "next/head";

import { useEffect } from "react";

import { getDescriptions } from "@/data/layouts/WelcomePageLayout/descriptions";

import { Counter } from "./Counter";
import { TextInputList } from "./TextInputList";
import { Links } from "./Links";

import styles from "./WelcomePage.module.css";

export const WelcomePageLayout = ({ fileName }) => {
  useEffect(() => {
    document.body.style.backgroundColor = "lightblue";

    return () => document.body.style.backgroundColor = "";
  }, []);

  return (
    <>
      <Head>
        <title>{fileName}</title>
      </Head>

      <Counter />

      <TextInputList />

      <h1 className={styles.headline}>{fileName} Page</h1>

      <ol>
        {getDescriptions(fileName).map(d => <li key={d}>{d}</li>)}
      </ol>

      <Links />
    </>
  );
};
