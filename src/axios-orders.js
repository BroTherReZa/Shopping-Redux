import axios from "axios";

const instance = axios.create({
  baseURL: "https://react-redux-main-33f7e-default-rtdb.firebaseio.com/",
});

export default instance;
