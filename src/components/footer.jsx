import styles from "./footer.module.css";

export default function Footer({ list }) {
  return (
    <footer className={styles.footer}>
      <ul>
        {list.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </footer>
  );
}
