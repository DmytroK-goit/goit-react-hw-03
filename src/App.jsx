import { useState, useEffect } from "react";
import { nanoid } from "nanoid";
import initContacts from "./assets/contacts.json";
import ContactForm from "./components/ContactForm/ContactForm";
import SearchBox from "./components/SearchBox/SearchBox";
import ContactList from "./components/ContactList/ContactList";

function App() {
  const [contacts, setContacts] = useState(() => {
    const savedContact = localStorage.getItem("save-contact");
    return savedContact ? JSON.parse(savedContact) : [];
  });
  const [newContact, setNewContact] = useState(initContacts);
  useEffect(() => {
    localStorage.setItem("save-contact", JSON.stringify(contacts));
  }, [contacts]);

  const handleChange = (evt) => {
    const { name, value } = evt.target;
    setContacts({
      ...prevContact,
      [name]: value,
    });
  };
  const handleSubmit = (evt) => {
    evt.preventDefault();
    const id = nanoid();
    setContacts((prevContact) => [...prevContact, newContact]);
    setNewContact({ name: "", number: "" });
  };

  return (
    <>
      <h1>Phonebook</h1>
      <ContactForm
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        contacts={contacts}
      />
      <SearchBox />
      <ContactList contacts={initContacts} />
    </>
  );
}

export default App;
