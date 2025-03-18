import styles from "@/styles/Home.module.css";
import { Links } from "@/components/Links";
import { Headline } from "@/components/Headline";

export function Main(props) {
  return (
    <main className={styles.main}>
      <Headline {...props} />
      <Links />
    </main>
  );
}
