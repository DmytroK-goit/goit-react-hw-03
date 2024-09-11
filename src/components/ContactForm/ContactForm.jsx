import { useId } from "react";
import s from "./ContactForm.module.css";

const ContactForm = ({ contact, handleChange, handleSubmit }) => {
  const nameId = useId();
  const phoneId = useId();

  return (
    <div>
      <form className={s.form} onSubmit={handleSubmit}>
        <label htmlFor={nameId}>
          Name
          <input
            type="text"
            id={nameId}
            name="name"
            value={contact.name}
            onChange={handleChange}
            placeholder="Enter your name"
          />
        </label>
        <label htmlFor={phoneId}>
          Number
          <input
            type="tel"
            id={phoneId}
            name="number"
            value={contact.number}
            onChange={handleChange}
            placeholder="Enter number"
          />
        </label>
        <button type="submit">Add contact</button>
      </form>
    </div>
  );
};
export default ContactForm;
