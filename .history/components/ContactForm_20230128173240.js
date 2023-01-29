import React, { useState } from "react";
import styles from "@/styles/Home.module.css";

export default function ContactForm() {
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const first = e.target.first.value;
    const last = e.target.last.value;
    const email = e.target.email.value;

    if (!/^[A-Z]/.test(first)) {
      setError("First name error. First letter must be capital. Must use alphabets only.");
    } else if (!/^[A-Z]/.test(last)) {
      setError("Last name must start with a capital letter");
    } else if (!/^[A-Z]/.test(email)) {
      setError("Email must start with a capital letter");
    } else {
      setError("");
      // send data to server
    }
  };

  return (
    <form
      className={styles.form}
      onSubmit={handleSubmit}
    >
      <fieldset className={`${styles.fieldset} ${styles.fieldset_firstName}`}>
        <label
          className={styles.label}
          for="first">
            First Name:
        </label>
        <input
          className={styles.input}
          type="text"
          id="first"
          name="first"
          placeholder="First Name Here"
        />
      </fieldset>

      <fieldset className={`${styles.fieldset} ${styles.fieldset_lastName}`}>
        <label
          className={styles.label}
          for="last">
            Last Name:
        </label>
        <input
          className={styles.input}
          type="text"
          id="last"
          name="last"
          placeholder="Last Name Here"
        />
      </fieldset>

      <fieldset className={`${styles.fieldset} ${styles.fieldset_email}`}>
        <label
          className={styles.label}
          for="email">
            Email:
        </label>
        <input
          className={styles.input}
          type="text"
          id="email"
          name="email"
          placeholder="Email Here"
        />
      </fieldset>

      {error && <p className={styles.error}>{error}</p>}
      <button type="submit" className={styles.button}>
        Submit
      </button>
    </form>
  );
}
