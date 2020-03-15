import React, {useState, useContext} from "react";
import GithubContext from '../../context/github/context';

import PropTypes from "prop-types";

const initialText = "";

const SearchForm = ({showAlert}) => {
  const [text, setText] = useState(initialText);
  const githubContext = useContext(GithubContext)

  const onSubmit = async e => {
    e.preventDefault();
    if (text === "") {
      showAlert("Please enter something", "light");
    } else {
      githubContext.searchUsers(text);
      setText(initialText);
    }
  };

  const onClear = () => {
    setText(initialText);
    githubContext.clearUsers();
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
        { githubContext.users && githubContext.users.length > 0 && (
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
  showAlert: PropTypes.func.isRequired
};

export default SearchForm;
