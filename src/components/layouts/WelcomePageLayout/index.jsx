import Head from "next/head";

import { useBgLightBlue } from "@/hooks/useBgLightBlue"
import { getDescriptions } from "@/data/layouts/WelcomePageLayout/descriptions";

import { Counter } from "./Counter";
import { TextInputList } from "./TextInputList";
import { Links } from "./Links";

import styles from "./WelcomePage.module.css";

export const WelcomePageLayout = ({ fileName }) => {
  useBgLightBlue();

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
