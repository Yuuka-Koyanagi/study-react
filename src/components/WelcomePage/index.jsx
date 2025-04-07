import Head from "next/head";
import Link from "next/link";

import { useCallback } from "react";

import { getDescriptions } from "@/data/WelcomePage/descriptions";

import { Links } from "./Links";

import styles from "./WelcomePage.module.css";

export const WelcomePage = ({ fileName }) => {
  const foo = 1;

  const handleClick = useCallback(e => {
    console.log(e.target.href);
    e.preventDefault();
    alert(foo);
  }, []);

  return (
    <>
      <Head>
        <title>{fileName}</title>
      </Head>

      <Link href="/about" onClick={handleClick}>
        ボタン
      </Link>

      <h1 className={styles.headline}>{fileName} Page</h1>

      <ol>
        {getDescriptions(fileName).map(e => <li key={e}>{e}</li>)}
      </ol>

      <Links />
    </>
  );
};
