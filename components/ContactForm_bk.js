import styles from "@/styles/Home.module.css";
import MyButton from '@/components/MyButton';
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
    const pattern = /(^[A-Za-z0-9]+[A-Za-z0-9.!#$%&'*+-/=?^_`{|]{0,}){1,64}@[A-Za-z0-9.-]{1,253}\.[A-Z|a-z]{2,}$/;
    // == RULES ==
    //- Can't include Spaces, tabs, and newlines.

    //1. Recipient name (At least 1 and up to 64 characters long):
      // - Must start with one or more alphanumeric characters
      // - The special characters ( ! # $ % & ' * + - / = ? ^ _ ` { | ) are allowed, but must not be the first letter in the email address..

    //2. Must contain @ symbol

    //3. Domain name (At least 1 and up to 253 characters long):
      // - Must contain one or more alphanumeric, 0-9, or ( - . )

    //4. Must contain a dot in front of the last 2 more more alphabetic character(s)

    //5. Top-level domain:
      // - Must contain at least 2 alphabetic characters.

     //References for email address rules:
      //https://knowledge.validity.com/hc/en-us/articles/220560587-What-are-the-rules-for-email-address-syntax-
      //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions

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

      {isFormValid && <MyButton hrefLink='/' linkText='Submit'/>}

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
