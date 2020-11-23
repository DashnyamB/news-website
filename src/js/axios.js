import axios from "axios";

const instance = axios.create({
  baseURL: "https://webtechmn.firebaseio.com/",
});

export default instance;
