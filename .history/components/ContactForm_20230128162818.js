import styles from '@/styles/Home.module.css';

export default function ContactForm() {
  return (
    <form
      className={styles.form}
      action="/send-data-here"
      method="post"
    >
      <label
        className={styles.label_firstName}
        for="first">First name:
      </label>

      <input
        className={styles.input_firstName}
        type="text"
        id="first"
        name="first"
      />

      <label
        className={styles.label_lastName}
        for="last">Last name:
      </label>

      <input
        className={styles.input_lastName}
        type="text"
        id="last"
        name="last"
      />

      <label
        className={styles.label_lastName}
        for="last">Email:
      </label>

      <input
        className={styles.input_lastName}
        type="text"
        id="last"
        name="last"
      />

      <button
        className={styles.btn_submit}
        type="submit">Submit
      </button>
    </form>
  )
}
