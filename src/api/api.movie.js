import axios from "axios";

let apiKey;

if (process.env.NODE_ENV !== "production") {
  apiKey = process.env.REACT_APP_OMDB_API_KEY;
} else {
  apiKey = process.env.OMDB_API_KEY;
}

export const getMovieById = async id => {
  // Example: http://www.omdbapi.com/?i=tt3896198&apikey=dce24c91
  const {data} = await axios.get(
    `http://www.omdbapi.com/?i=${id}&apikey=${apiKey}&plot=full`
  );
  if (data.Error) {
    return null;
  }
  return data;
};

export const searchMovies = async text => {
  // Example: http://www.omdbapi.com/?s=guardians&apikey=dce24c91
  const {data} = await axios.get(
    `http://www.omdbapi.com/?s=${text}&apikey=${apiKey}`
  );
  if (data.Error) {
    return [];
  }
  return data.Search;
};
