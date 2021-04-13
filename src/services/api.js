import axios from "axios";
const ApiKey = "44fd846a8fbd886b31f763260ef2b77b";

axios.defaults.baseURL = "https://api.themoviedb.org/3";

// const BASE_URL = "https://api.themoviedb.org/3";

export const trending = () => {
  return axios
    .get(`/trending/all/week?api_key=${ApiKey}`)
    .then(({ data }) => {
      return data;
    })
    .catch((err) => console.log(err));
};

export const movieDetailsById = (id) => {
  return axios
    .get(`/movie/${id}?api_key=${ApiKey}&language=en-US`)
    .then(({ data }) => {
      return data;
    })
    .catch((err) => console.log(err));
};
