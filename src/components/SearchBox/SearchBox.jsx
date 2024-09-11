import { useId } from "react";

const SearchBox = () => {
  const surchId = useId();

  return (
    <div>
      <form>
        <label htmlFor={surchId}>
          Find contacts by name
          <input type="text" id={surchId} placeholder="Enter surch name" />
        </label>
      </form>
    </div>
  );
};
export default SearchBox;
