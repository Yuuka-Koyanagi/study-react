import Image from "next/image";

import { linkItems } from "@/data/layouts/WelcomePageLayout/Links";

import styles from "./Links.module.css";

const LinkItem = ({ className, href, imageSrc, imageAlt, description }) => (
  <a
    className={className}
    href={href}
    target="_blank"
    rel="noopener noreferrer"
  >
    {imageSrc && (
      <Image
        className={styles.logo}
        src={imageSrc}
        alt={imageAlt}
        width={20}
        height={20}
      />
    )}
    {description}
  </a>
);

export const Links = () => (
  <div className={styles.ctas}>
    {linkItems.map(linkItem => <LinkItem key={linkItem.href} {...linkItem} />)}
  </div >
);
