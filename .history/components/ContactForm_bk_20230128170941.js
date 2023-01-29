import styles from '@/styles/Home.module.css';

export default function ContactForm() {
  return (
    <form
      className={styles.form}
      action="/send-data-here"
      method="post"
    >
      <fieldset
        className={`${styles.fieldset} ${styles.fieldset_firstName}`}
      >
        <label
          className={styles.label}
          for="first">First Name:
        </label>

        <input
          className={styles.input}
          type="text"
          id="first"
          name="first"
          placeholder='First Name Here'
        />
      </fieldset>

      <fieldset
        className={`${styles.fieldset} ${styles.fieldset_lastName}`}
      >
        <label
          className={styles.label}
          for="last">Last Name:
        </label>

        <input
          className={styles.input}
          type="text"
          id="last"
          name="last"
          placeholder='Last Name Here'
        />
      </fieldset>

      <fieldset
        className={`${styles.fieldset} ${styles.fieldset_email}`}
      >
        <label
          className={styles.label}
          for="last">Email:
        </label>

        <input
          className={styles.input}
          type="text"
          id="last"
          name="last"
          placeholder='Email Here'
        />
      </fieldset>
    </form>
  )
}
