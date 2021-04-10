import axios from "axios";
const ApiKey = "44fd846a8fbd886b31f763260ef2b77b";

export const trending = () => {
  return axios
    .get(`https://api.themoviedb.org/3/trending/all/week?api_key=${ApiKey}`)
    .then(({ data }) => {
      console.log(data.results);
      return data;
    })
    .catch((err) => console.log(err));
};
