import style from "./Header.module.css"
import Link from "next/link";

export const Header = () => {
  return (
    <header className={style.header}>
      <Link href="/">Index</Link>
      <Link href="/about">About</Link>
    </header>
  );
}
