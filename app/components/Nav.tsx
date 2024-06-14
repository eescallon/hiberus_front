"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import styles from "../styles/layout.module.css";

export const Nav = () => {
  const pathname = usePathname();

  return (
    <nav className={styles.nav}>
      <Link href="/" className="navbar-brand">
          <img src="/logo.png"
              height="30"
              alt="MDB Logo"
              loading="lazy" />
      </Link>
      <Link
        className={`${styles.link} ${
          pathname === "/product" ? styles.active : ""
        }`}
        href="/product"
      >
        Product
      </Link>
      <Link
        className={`${styles.link} ${
          pathname === "/inventory" ? styles.active : ""
        }`}
        href="/inventory"
      >
        Inventory
      </Link>
      <Link
        className={`${styles.link} ${
          pathname === "/shopping" ? styles.active : ""
        }`}
        href="/shopping"
      >
        Shopping
      </Link>
      <Link
        className={`${styles.link} ${
          pathname === "/cart" ? styles.active : ""
        }`}
        href="/cart"
      >
        Carrito de compras
      </Link>
    </nav>
  );
};
