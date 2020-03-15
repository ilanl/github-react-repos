import React, {useState} from "react";
import PropTypes from "prop-types";

const initialText = "";

const SearchForm = ({searchUsers, clearUsers, showClearButton, showAlert}) => {
  const [text, setText] = useState(initialText);

  const onSubmit = async e => {
    e.preventDefault();
    if (text === "") {
      showAlert("Please enter something", "light");
    } else {
      await searchUsers(text);
      setText(initialText);
    }
  };

  const onClear = () => {
    setText(initialText);
    clearUsers();
  };

  return (
    <div>
      <form className="form" onSubmit={onSubmit} onReset={onClear}>
        <input
          type="text"
          name="text"
          placeholder="Search users"
          value={text}
          onChange={e => setText(e.target.value)}
        />
        <button type="submit" className="btn btn-dark btn-block">
          Search
        </button>
        {showClearButton && (
          <button
            type="button"
            onClick={onClear}
            className="btn btn-light btn-block"
          >
            Clear
          </button>
        )}
      </form>
    </div>
  );
};

SearchForm.propTypes = {
  showAlert: PropTypes.func.isRequired,
  searchUsers: PropTypes.func.isRequired,
  clearUsers: PropTypes.func.isRequired,
  showClearButton: PropTypes.bool.isRequired
};

export default SearchForm;
