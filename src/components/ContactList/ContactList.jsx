const ContactList = ({ contacts }) => {
  return (
    <ul>
      {contacts.map((contact, index) => (
        <li key={index}>
          <p>{contact.name}</p>
          <p>{contact.number}</p>
        </li>
      ))}
    </ul>
  );
};
export default ContactList;
