import React, {useState, useContext} from "react";
import GithubContext from "../../context/github/context";
import AlertContext from "../../context/alert/context";

const initialText = "";

const SearchForm = () => {
  const [text, setText] = useState(initialText);
  const {searchUsers, clearUsers, users} = useContext(GithubContext);
  const {showAlert} = useContext(AlertContext);

  const onSubmit = async e => {
    e.preventDefault();
    if (text === "") {
      showAlert("Please enter something", "light");
    } else {
      searchUsers(text);
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
        {users && users.length > 0 && (
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

export default SearchForm;
