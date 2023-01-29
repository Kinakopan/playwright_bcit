import Link from 'next/link';
import styles from "@/styles/Home.module.css";
import React, { useState, useRef } from "react";

export default function ContactForm() {
  const [errors, setErrors] = useState({ first: "", last: "", email: "" });
  const formRef = useRef(null);
  const [isFormValid, setIsFormValid] = useState(false);
  const handleChange = (e) => {
    e.preventDefault();
    const first = formRef.current.first.value;
    const last = formRef.current.last.value;
    const email = formRef.current.email.value;
    const pattern = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}$/;

    const updatedErrors = {...errors};

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

    if (!pattern.test(email)) {
      updatedErrors.email = "Email is invalid.";
    } else {
      updatedErrors.email = "";
    }

    setErrors(updatedErrors);

    if (!Object.values(updatedErrors).some((err) => err !== "")) {
      setIsFormValid(true);
    } else {
      setIsFormValid(false);
    }
  };

  return (
    <div className={styles.cont_form}>
      <form
        ref={formRef}
        className={styles.form}
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
            onChange={handleChange}
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
            onChange={handleChange}
          />
        </fieldset>

        <fieldset className={`${styles.fieldset} ${styles.fieldset_email}`}>
          <label className={styles.label} for="email">
            Email:
          </label>
          <input
            className={styles.input}
            type="email"
            id="email"
            name="email"
            placeholder="Email Here"
            onChange={handleChange}
          />
        </fieldset>
      </form>

      {isFormValid && <button className={styles.btn_submit}><Link className={styles.text_submit} href="/">Submit</Link></button>}

      <div>
        {Object.entries(errors).map(([key, error]) => {
          if (error !== "" && formRef.current[key].value !== "") {
            return <p className={styles.error}>{error}</p>;
          }
        })}
      </div>
    </div>
  );
}
