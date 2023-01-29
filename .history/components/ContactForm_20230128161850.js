import styles from '@/styles/Home.module.css';

export default function ContactForm() {
  return (
    <form
      className={styles.form}
      action="/send-data-here"
      method="post"
    >
      <label for="first">First name:</label>
      <input type="text" id="first" name="first" />
      <label for="last">Last name:</label>
      <input type="text" id="last" name="last" />
      <button type="submit">Submit</button>
    </form>
  )
}
