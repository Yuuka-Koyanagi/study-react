import Link from "next/link";

import NAV_ITEMS from "@/data/siteInfo";

export const Header = () => (
  <header>
    {NAV_ITEMS.map(({ pageName, href }) => <Link key={href} href={href}>{pageName}</Link>)}
  </header>
);
