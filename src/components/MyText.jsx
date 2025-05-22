import styles from "./MyText.module.css";

export function MyText() {
  return (
    <div className={styles.container}>
      <div className={styles.div}>
        <h1 className={styles.title}>Meu primeiro React app</h1>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio,
          nostrum earum? Laudantium enim officia accusantium nulla adipisci
          harum provident, quod ex, beatae quibusdam eaque doloribus! Rem
          pariatur nemo ipsum beatae.
        </p>
      </div>
    </div>
  );
}
