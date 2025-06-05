import styles from "./MyGrid.module.css";

export function MyGrid() {
  return (
    <div className={styles.container}>
      <header className={styles.header1} />
      <header className={styles.header2} />
      <aside className={styles.aside} />
      <main className={styles.main}>
        <div className={styles.card}>
          <h2> card 1 </h2>
          <p>this is card one fssssssss</p>
        </div>

        <div className={styles.card}>
          <h2> card 2 </h2>
          <p>this is second card fssssssss</p>
        </div>

        <div className={styles.card}>
          <h2> card 3 </h2>
          <p>this is card 3 fsssssssssss</p>
        </div>

        <div className={styles.card}>
          <h2> card 4 </h2>
          <p>this is a fourth card</p>
        </div>

        <div className={styles.card}>
          <h2> card 5 </h2>
          <p>aaaaaaaaaaaaaaaaaa 5</p>
       
        </div>
      </main>
      <footer className={styles.footer} />
    </div>
  );
}
