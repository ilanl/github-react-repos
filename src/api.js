import axios from "axios";

let githubClientId;
let githubClientSecret;

if (process.env.NODE_ENV !== "production") {
  githubClientId = process.env.REACT_APP_GITHUB_CLIENT_ID;
  githubClientSecret = process.env.REACT_APP_GITHUB_CLIENT_SECRET;
} else {
  githubClientId = process.env.GITHUB_CLIENT_ID;
  githubClientSecret = process.env.GITHUB_CLIENT_SECRET;
}

const getUser = async userName => {
  const {data} = await axios.get(
    `https://api.github.com/users/${userName}?client_id=${githubClientId}&client_secret=${githubClientSecret}`
  );
  return data;
};

const getUserRepos = async userName => {
  const {data} = await axios.get(
    `https://api.github.com/users/${userName}/repos?per_page=5&sort=created:asc&client_id=${githubClientId}&client_secret=${githubClientSecret}`
  );
  return data;
};

const searchUsers = async text => {
  const {data} = await axios.get(
    `https://api.github.com/search/users?q=${text}&client_id=${githubClientId}&client_secret=${githubClientSecret}`
  );
  return data.items;
};

export default {
  searchUsers,
  getUser,
  getUserRepos
};
