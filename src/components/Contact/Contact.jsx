import { IoPeopleSharp } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";
const Contact = ({ data, onDelete }) => {
  return (
    <div key={data.id}>
      <p>
        <IoPeopleSharp /> {data.name}
      </p>
      <p>
        <FaPhoneAlt /> {data.number}
      </p>
      <button type="button" onClick={() => onDelete(data.id)}>
        Dalete
      </button>
    </div>
  );
};
export default Contact;
