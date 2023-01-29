import styles from '@/styles/Home.module.css';

export default function ContactForm() {
  return (
    <form
      className={styles.form}
      action="/send-data-here"
      method="post"
    >
      <div>
        <label
          className={styles.label_firstName}
          for="first">First Name Here
        </label>

        <input
          className={styles.input_firstName}
          type="text"
          id="first"
          name="first"
        />
      </div>

      <div>
        <label
          className={styles.label_lastName}
          for="last">Last Name Here
        </label>

        <input
          className={styles.input_lastName}
          type="text"
          id="last"
          name="last"
        />
      </div>

      <div>
        <label
          className={styles.label_lastName}
          for="last">Email Here
        </label>

        <input
          className={styles.input_lastName}
          type="text"
          id="last"
          name="last"
        />
      </div>

      <button
        className={styles.btn_submit}
        type="submit">Submit
      </button>
    </form>
  )
}
