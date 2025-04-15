import Image from "next/image";

import NAV_ITEMS from "@/data/Footer/footerNav";

const FooterLink = ({ href, src, alt, label }) => (
  <a href={href} target="_blank" rel="noopener noreferrer">
    <Image aria-hidden src={src} alt={alt} width={16} height={16} />
    {label}
  </a>
);

export const Footer = () => (
  <footer>
    {NAV_ITEMS.map(navItem => <FooterLink key={navItem.href} {...navItem} />)}
  </footer>
);
