import { AppLayout } from "../layout/AppLayout";
import styles from "./WelcomePage.module.css";
import { Links } from "./Links";

export const WelcomePage = ({ fileName }) => {
  return (
    <AppLayout title={fileName}>
      <h1 className={styles.headline}>{fileName} Page</h1>
      <ol>
        <li>Get started by editing <code>pages/{fileName}.js</code>.</li>
        <li>Save and see your changes instantly.</li>
      </ol>
      <Links />
    </AppLayout>
  );
}
