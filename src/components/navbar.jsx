import styles from "./navbar.module.css";

export default function Navbar({ list }) {
  return (
    <nav className={styles.navbar}>
      <ul>
        {list.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </nav>
  );
}
