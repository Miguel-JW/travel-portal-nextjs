import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import styles from "./Layout.module.css";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const router = useRouter();

  const navLinks = [
    { href: "/", label: "Início" },
    { href: "/destinos", label: "Destinos" },
  ];

  return (
    <div className={styles.wrapper}>
      <header className={styles.header}>
        <div className={styles.headerInner}>
          <Link href="/" className={styles.brand}>
            <span className={styles.brandIcon}>✦</span>
            <span className={styles.brandName}>Horizonte</span>
          </Link>

          <nav className={styles.nav}>
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`${styles.navLink} ${router.pathname === link.href ? styles.navLinkActive : ""}`}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      </header>

      <main className={styles.main}>{children}</main>

      <footer className={styles.footer}>
        <div className={styles.footerInner}>
          <p className={styles.footerBrand}>
            <span className={styles.brandIcon}>✦</span> Horizonte
          </p>
          <p className={styles.footerTagline}>Explore o mundo, um destino de cada vez.</p>
          <p className={styles.footerCopy}>© {new Date().getFullYear()} Portal Horizonte</p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
