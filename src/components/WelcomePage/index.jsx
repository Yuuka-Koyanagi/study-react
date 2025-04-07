import Head from "next/head";

import { getDescriptions } from "@/data/WelcomePage/descriptions";

import { Links } from "./Links";

import styles from "./WelcomePage.module.css";

export const WelcomePage = ({ fileName }) => (
  <>
    <Head>
      <title>{fileName}</title>
    </Head>

    <h1 className={styles.headline}>{fileName} Page</h1>

    <ol>
      {getDescriptions(fileName).map(e => <li key={e}>{e}</li>)}
    </ol>

    <Links />
  </>
);
