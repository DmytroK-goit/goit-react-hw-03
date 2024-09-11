const Contact = ({ data, onDelete }) => {
  return (
    <div key={data.id}>
      <p>{data.name}</p>
      <p>{data.number}</p>
      <button type="button" onClick={() => onDelete(data.id)}>
        Dalete
      </button>
    </div>
  );
};
export default Contact;
