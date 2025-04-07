import styles from "./Links.data.module.css";

export const linkItems = [
  {
    className: styles.primary,
    href: "https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app",
    imageSrc: "/vercel.svg",
    imageAlt: "Vercel logomark",
    description: "Deploy now"
  },
  {
    className: styles.secondary,
    href: "https://nextjs.org/docs?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app",
    description: "Read our docs"
  }
];
