import {ActiveLink} from "./ActiveLink";
import styles from "./Navbar.module.css";

const menuItems = [
  {
    text: "Home",
    href: "/",
  },
  {
    text: "About",
    href: "/about",
  },
  {
    text: "Contact",
    href: "/contact",
  },
  {
    text: "Pricing",
    href: "/pricing",
  },
];

export default function Navbar() {
  return (
    <nav className={styles["menu-container"]}>
      {menuItems.map((option) => (
        <ActiveLink key={option.href} href={option.href} text={option.text} />
      ))}
    </nav>
  );
}
