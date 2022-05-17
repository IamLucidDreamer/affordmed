const { default: Axios } = require("axios");

const axios = Axios.create({
  baseURL: "http://127.0.0.1:3030",
});

export default axios;
