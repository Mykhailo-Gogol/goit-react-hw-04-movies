import axios from "axios";
const API_KEY = "44fd846a8fbd886b31f763260ef2b77b";

axios.defaults.baseURL = "https://api.themoviedb.org/3";

export const Trending = () => {
  return axios
    .get(`/trending/all/day?api_key=${API_KEY}`)
    .then(({ data }) => {
      return data;
    })
    .catch((err) => console.log(err));
};

export const MovieDetailsById = (id) => {
  return axios
    .get(`/movie/${id}?api_key=${API_KEY}&language=en-US`)
    .then(({ data }) => {
      return data;
    })
    .catch((err) => console.log(err));
};

export const MovieCredits = (id) => {
  return axios
    .get(`/movie/${id}/credits?api_key=${API_KEY}&language=en-US`)
    .then(({ data }) => {
      return data;
    })
    .catch((err) => console.log(err));
};

export const MovieReviews = (id) => {
  return axios
    .get(`/movie/${id}/reviews?api_key=${API_KEY}&language=en-US&page=1`)
    .then(({ data }) => {
      return data;
    })
    .catch((err) => console.log(err));
};

export const MovieByQuery = (query, page = 1) => {
  return axios
    .get(
      `/search/movie?query=${query}&api_key=${API_KEY}&language=en-US&page=${page}&include_adult=false`
    )
    .then(({ data }) => {
      return data;
    })
    .catch((err) => console.log(err));
};
