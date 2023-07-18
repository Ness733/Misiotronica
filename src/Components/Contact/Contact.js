import styles from "./Contact.module.css";

export function Contact() {
  return (
    <div>
      <form className={styles.contactDiv}>
        <h1>Contacto</h1>
        <label for="fname">Full Name</label>
        <input type="text" name="fullname" placeholder="Your full name." />
        <label for="lname">Contact E-mail</label>
        <input type="text" name="email" placeholder="Contact Email." />
        <textarea
          className={styles.textArea}
          name="subject"
          placeholder="Your message here..."
        ></textarea>
        <input className={styles.submitBtn} type="submit" value="Send" />
      </form>
    </div>
  );
}
