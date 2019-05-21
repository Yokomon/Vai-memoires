import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization:
      "Client-ID 31ce87b9ab117506482470ea3fa3321ad3ae078b4c0a685d16053664d996cd40"
  }
});
