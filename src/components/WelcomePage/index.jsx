import Head from "next/head";

import { useCallback, useState } from "react";

import { getDescriptions } from "@/data/WelcomePage/descriptions";

import { Links } from "./Links";

import styles from "./WelcomePage.module.css";

export const WelcomePage = ({ fileName }) => {
  const [count, setCount] = useState(1);

  const handleClick = useCallback(() => {
    console.log(count);
    if (count < 10) setCount(count + 1);
  }, [count]);

  return (
    <>
      <Head>
        <title>{fileName}</title>
      </Head>

      <h1>{count}</h1>
      <button onClick={handleClick}>ボタン</button>

      <h1 className={styles.headline}>{fileName} Page</h1>

      <ol>
        {getDescriptions(fileName).map(e => <li key={e}>{e}</li>)}
      </ol>

      <Links />
    </>
  );
};
