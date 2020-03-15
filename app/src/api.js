import axios from "axios";

const getUser = async userName => {
  const {data} = await axios.get(
    `https://api.github.com/users/${userName}?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
  );
  return data;
};

const getUserRepos = async userName => {
  const {data} = await axios.get(
    `https://api.github.com/users/${userName}/repos?per_page=5&sort=created:asc&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
  );
  return data;
};

const searchUsers = async text => {
  const {data} = await axios.get(
    `https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
  );
  return data.items;
};

export default {
  searchUsers,
  getUser,
  getUserRepos
};
