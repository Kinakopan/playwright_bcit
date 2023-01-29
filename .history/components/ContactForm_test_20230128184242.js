import React, { useState, useRef } from "react";
import styles from "@/styles/Home.module.css";

export default function ContactForm() {
  const [errors, setErrors] = useState({ first: "", last: "", email: "" });
  const formRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const first = formRef.current.first.value;
    const last = formRef.current.last.value;
    const email = formRef.current.email.value;
    // const first = e.target.first.value;
    // const last = e.target.last.value;
    // const email = e.target.email.value;

    let updatedErrors = { ...errors };
    if (!/^[A-Z]/.test(first)) {
      updatedErrors.first =
        "First name error. First letter must be capital. Must use alphabets only.";
    } else {
      updatedErrors.first = "";
    }

    if (!/^[A-Z]/.test(last)) {
      updatedErrors.last =
        "Last name error. Last letter must be capital. Must use alphabets only.";
    } else {
      updatedErrors.last = "";
    }

    if (!/^[A-Z]/.test(email)) {
      updatedErrors.email = "Email is invalid.";
    } else {
      updatedErrors.email = "";
    }

    setErrors(updatedErrors);

    // check if there are any errors, if not then send data to server
    if (!Object.values(updatedErrors).some((err) => err !== "")) {
      // send data to server
    }
  };

  return (
    <div className={styles.cont_form}>
      <form
        ref={formRef}
        className={styles.form}
        onSubmit={handleSubmit}
        // action="/send-data-here"
        // method="post"
      >
        <fieldset className={`${styles.fieldset} ${styles.fieldset_firstName}`}>
          <label className={styles.label} for="first">
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
          <label className={styles.label} for="last">
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
          <label className={styles.label} for="email">
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
      </form>

      <button
        type="submit"
        className={styles.button}
        onClick={handleSubmit}
      >
        Submit
      </button>

      <div>
        {Object.values(errors).map((error) => {
          if (error !== "") {
            return <p className={styles.error}>{error}</p>;
          }
        })}
      </div>
    </div>
  );
}
