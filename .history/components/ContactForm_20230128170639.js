import styles from '@/styles/Home.module.css';

export default function ContactForm() {
  return (
    <form
      className={styles.form}
      action="/send-data-here"
      method="post"
    >
      <fieldset
        className={styles.fieldset}
      >
        <label
          className={`${styles.label} ${styles.label_firstName}`}
          for="first">First Name:
        </label>

        <input
          className={`${styles.input} ${styles.input_firstName}`}
          type="text"
          id="first"
          name="first"
          placeholder='First Name Here'
        />
      </fieldset>

      <fieldset
        className={styles.fieldset}
      >
        <label
          className={`${styles.label} ${styles.label_lastName}`}
          for="last">Last Name:
        </label>

        <input
          className={`${styles.input} ${styles.input_lastName}`}
          type="text"
          id="last"
          name="last"
          placeholder='Last Name Here'
        />
      </fieldset>

      <fieldset
        className={styles.fieldset}
      >
        <label
          className={`${styles.label} ${styles.label_email}`}
          for="last">Email:
        </label>

        <input
          className={`${styles.input} ${styles.input_email}`}
          type="text"
          id="last"
          name="last"
          placeholder='Email Here'
        />
      </fieldset>

      <button
        className={styles.btn_submit}
        type="submit">Submit
      </button>
    </form>
  )
}
