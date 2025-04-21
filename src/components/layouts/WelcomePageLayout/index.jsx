import Head from "next/head";

import { useBgColor } from "@/hooks/useBgColor"
import { getDescriptions } from "@/data/layouts/WelcomePageLayout/descriptions";

import { Counter } from "./Counter";
import { InputArray } from "./InputArray";
import { Links } from "./Links";

import styles from "./WelcomePage.module.css";

export const WelcomePageLayout = ({ fileName }) => {
  useBgColor();

  return (
    <>
      <Head>
        <title>{fileName}</title>
      </Head>

      <Counter />

      <InputArray />

      <h1 className={styles.headline}>{fileName} Page</h1>

      <ol>
        {getDescriptions(fileName).map(d => <li key={d}>{d}</li>)}
      </ol>

      <Links />
    </>
  );
};
