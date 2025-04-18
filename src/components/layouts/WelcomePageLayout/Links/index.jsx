import Image from "next/image";

import { useState } from "react";

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

export const Links = () => {
  const [items, setItems] = useState(linkItems);
  const handleReduce = () => setItems(prevItems => prevItems.slice(0, -1));

  return (
    <>
      <button onClick={handleReduce}>減らす</button>

      <p>アイテムの数は<code>{items.length}個</code>です</p>

      <div className={styles.ctas}>
        {items.map(linkItem => <LinkItem key={linkItem.href} {...linkItem} />)}
      </div >
    </>
  )
};
