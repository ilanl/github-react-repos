import React, {Fragment} from "react";

import SearchForm from "../search/SearchForm";
import UserList from "../users/UserList";
import Alert from "../alerts/Alert";

const HomePage = () => {
  return (
    <Fragment>
      <Alert />
      <SearchForm />
      <UserList />
    </Fragment>
  );
};

export default HomePage;
