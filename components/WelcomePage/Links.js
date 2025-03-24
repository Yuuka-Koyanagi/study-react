import styles from "./Links.module.css";
import Image from "next/image";

const ITEMS = [
  {
    className: styles.primary,
    href: "https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app",
    image:
      <Image
        className={styles.logo}
        src="/vercel.svg"
        alt="Vercel logomark"
        width={20}
        height={20}
      />,
    discription: "Deploy now"
  },
  {
    className: styles.secondary,
    href: "https://nextjs.org/docs?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app",
    discription: "Read our docs"
  }
];

export const Links = () => {
  return (
    <div className={styles.ctas}>
      {ITEMS.map(item => {
        return (
          <a
            key={item.href}
            className={item.className}
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
          >
            {item.image}
            {item.discription}
          </a>
        );
      })}
    </div>
  );
} 
