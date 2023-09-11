import styles from "./styles.module.scss";

const Subscribe = () => {
  return (
    <section className={styles.subscribe}>
      <div className={styles.subscribe__ask}>
        <p className={styles.text}>هل تريد أن تسمع أخبار القهوة منا؟</p>
      </div>
      <form className={styles.subscribe__form}>
        <input type="text" name="email" placeholder="الرجاء ادخال البريد الالكتروني" />
        <button className={styles.subscribeBtn}>الإشتراك</button>
      </form>
    </section>
  )
}

export default Subscribe;